self.addEventListener('push', event => {
  //console.log(`プッシュ通知: ${event.data.text()}`)
  const data = event.data.json()
  event.waitUntil(self.registration.showNotification(data.title, {body:data.body}))
})
