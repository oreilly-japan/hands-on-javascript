self.addEventListener("message", event => {
  const name = event.data
  if (typeof name !== "string") throw "名前が文字列ではありません"
  self.postMessage(`Hello, ${name}`)
})
