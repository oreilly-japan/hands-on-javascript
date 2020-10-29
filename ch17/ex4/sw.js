self.addEventListener('install', event => {
  console.log(`install:${event}`)
});

self.addEventListener('activate', event => {
  console.log(`activate:${event}`)
});

self.addEventListener('fetch', event => {
  event.respondWith(new Promise((resolve, reject) => {
    resolve(new Response("Installable app"))
  }))
});
