self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('schedule-app-v1').then(cache => {
      return cache.addAll([
        '/test.html',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});