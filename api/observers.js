// ============================================================================
// IMKONIYATLAR KALITI — Real-Time Online Observers Serverless API (Vercel)
// Accurately tracks active online users (35s heartbeat TTL), today's visitors,
// and total visitors across all Operating Systems (Windows, Android, iOS, macOS, Linux).
// ============================================================================

const ACTIVE_TTL_MS = 35000; // 35 seconds heartbeat window for real online users

// Global state persisted across warm serverless invocations
const globalState = globalThis.__ikObserversState || {
  activeClients: new Map(), // clientId -> { lastSeen, os, quality, tabs: Set }
  todayDate: "",
  todayClientIds: new Set(),
  totalClientIds: new Set()
};
globalThis.__ikObserversState = globalState;

function getTashkentDateString() {
  try {
    const now = new Date();
    // UTC+5 Tashkent time
    const tashkentTime = new Date(now.getTime() + 5 * 60 * 60 * 1000);
    return tashkentTime.toISOString().slice(0, 10);
  } catch (_) {
    return new Date().toISOString().slice(0, 10);
  }
}

function pruneStaleSessions(nowMs) {
  for (const [cid, info] of globalState.activeClients.entries()) {
    if (nowMs - info.lastSeen > ACTIVE_TTL_MS) {
      globalState.activeClients.delete(cid);
    }
  }
}

module.exports = function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const nowMs = Date.now();
  const todayStr = getTashkentDateString();

  if (globalState.todayDate !== todayStr) {
    globalState.todayDate = todayStr;
    globalState.todayClientIds.clear();
  }

  let body = {};
  if (req.body && typeof req.body === "object") {
    body = req.body;
  } else if (typeof req.body === "string" && req.body.trim()) {
    try {
      body = JSON.parse(req.body);
    } catch (_) {}
  }

  const query = req.query || {};
  const action = body.action || query.action || "heartbeat";
  const forwarded = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "anon";
  const ipHash = String(forwarded).split(",")[0].trim();
  const clientId = String(body.clientId || query.clientId || ipHash || "guest").slice(0, 80);
  const tabId = String(body.tabId || query.tabId || "tab-default").slice(0, 80);
  const os = String(body.os || query.os || "Universal OS").slice(0, 50);
  const quality = String(body.quality || query.quality || "8K Auto").slice(0, 30);

  pruneStaleSessions(nowMs);

  if (action === "leave") {
    const existing = globalState.activeClients.get(clientId);
    if (existing) {
      existing.tabs.delete(tabId);
      if (existing.tabs.size === 0) {
        globalState.activeClients.delete(clientId);
      }
    }
  } else {
    let entry = globalState.activeClients.get(clientId);
    if (!entry) {
      entry = { lastSeen: nowMs, os, quality, tabs: new Set([tabId]) };
      globalState.activeClients.set(clientId, entry);
    } else {
      entry.lastSeen = nowMs;
      entry.os = os;
      entry.quality = quality;
      entry.tabs.add(tabId);
    }
    globalState.todayClientIds.add(clientId);
    globalState.totalClientIds.add(clientId);
  }

  pruneStaleSessions(nowMs);

  // Count active online clients (at least 1 if current request is a heartbeat)
  const onlineClientsCount = action === "leave"
    ? globalState.activeClients.size
    : Math.max(1, globalState.activeClients.size);

  // OS breakdown of currently online users
  const osStats = {};
  for (const info of globalState.activeClients.values()) {
    const k = info.os || "Other";
    osStats[k] = (osStats[k] || 0) + 1;
  }

  return res.status(200).json({
    ok: true,
    online: onlineClientsCount,
    today: Math.max(onlineClientsCount, globalState.todayClientIds.size),
    total: Math.max(onlineClientsCount, globalState.totalClientIds.size),
    date: todayStr,
    osStats,
    timestamp: nowMs
  });
};
