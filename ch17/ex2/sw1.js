self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/ch17/ex2/v1/page1.html'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    return response || fetch(event.request).then(response => {
      return caches.open('v1').then(cache => {
        cache.put(event.request, response.clone())
        return response
      })
    })
  }));
});
