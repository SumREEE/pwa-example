const cacheName = 'simple-pwa-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/images/icon-192x192.png',
  '/images/icon-512x512.png'
];

// ติดตั้ง Service Worker และเก็บไฟล์ใน Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching assets');
      return cache.addAll(assetsToCache);
    })
  );
});

// ทำงานเมื่อโหลดไฟล์ (Fetch)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
