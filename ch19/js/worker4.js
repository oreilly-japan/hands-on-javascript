importScripts("https://cdnjs.cloudflare.com/ajax/libs/mathjs/6.6.2/math.js")
self.addEventListener("message", event => {
  postMessage(math.evaluate(event.data))
})
