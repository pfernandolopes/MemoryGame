self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('bluey-memory-game-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/styles.css',
        '/icons/bluey-icon-192.png',
        '/icons/bluey-icon-512.png'
      ]);
    })
  );
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
});