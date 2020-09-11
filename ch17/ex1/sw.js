self.addEventListener('install', event => {
  console.log(`install:${event}`)
});

self.addEventListener('activate', event => {
  console.log(`activate:${event}`)
});

self.addEventListener('fetch', event => {
  event.respondWith(new Promise((resolve, reject) => {
    const pathname = new URL(event.request.url).pathname
    console.log(pathname)
    if (pathname === "/") {
      resolve(fetch(event.request))
    } else if (pathname.endsWith(".html")) {
      resolve(new Response("Proxy World!"))
    } else {
      resolve(Response.error())
    }
  }))
});
