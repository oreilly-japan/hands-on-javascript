let canvas
self.addEventListener("message", event => {
  if ("canvas" in event.data) canvas = event.data.canvas

  const ctx = canvas.getContext("2d")
  ctx.fillStyle = event.data.color
  ctx.beginPath()
  ctx.moveTo(50, 50)
  ctx.lineTo(50, 80)
  ctx.lineTo(10, 80)
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()
  ctx.moveTo(55, 80)
  ctx.arc(125, 80, 70, Math.PI, 0, true)
  ctx.bezierCurveTo(170, 100, 120, -50, 55, 50)
  ctx.closePath()
  ctx.moveTo(105, 50)
  ctx.ellipse(85, 50, 20, 15, 0, 0, 2 * Math.PI)
  ctx.moveTo(90, 50)
  ctx.arc(80, 50, 10, 0, 2 * Math.PI)
  ctx.rect(10, 85, 40, 5)
  ctx.fill()
})
