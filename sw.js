const CACHE_NAME = 'imkoniyatlar-kaliti-24-7-v7';
const ASSETS = [
  './',
  './index.html',
  './css/style.css?v=7',
  './js/i18n.js?v=7',
  './js/data-telecom.js?v=7',
  './js/data-unique-bank.js?v=7',
  './js/data-subjects.js?v=7',
  './js/data-extra.js?v=7',
  './js/app.js?v=7',
  './assets/logo.png',
  './assets/bg-education.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => {})
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('/api/')) return;
  event.respondWith(
    fetch(event.request, { cache: 'no-cache' })
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
