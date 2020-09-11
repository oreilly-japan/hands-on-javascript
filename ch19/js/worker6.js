let messageData = "初期値"

self.addEventListener("connect", event => {
  let port = event.ports[0]
  port.addEventListener("message", event => {
    let prevData = messageData
    messageData = event.data
    port.postMessage(prevData)
  })
  port.start()
})
