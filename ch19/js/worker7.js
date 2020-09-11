const drawBird = (scale, dx, dy) => {
  ctx.clearRect(0, 0, 200, 200)
  ctx.beginPath()
  ctx.moveTo(50*scale+dx, 50*scale+dy)
  ctx.lineTo(50*scale+dx, 80*scale+dy)
  ctx.lineTo(10*scale+dx, 80*scale+dy)
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()
  ctx.moveTo(55*scale+dx, 80*scale+dy)
  ctx.arc(125*scale+dx, 80*scale+dy, 70*scale, Math.PI, 0, true)
  ctx.bezierCurveTo(170*scale+dx, 100*scale+dy, 120*scale+dx, -50*scale+dy, 55*scale+dx, 50*scale+dy)
  ctx.closePath()
  ctx.moveTo(105*scale+dx, 50*scale+dy)
  ctx.ellipse(85*scale+dx, 50*scale+dy, 20*scale, 15*scale, 0, 0, 2 * Math.PI)
  ctx.moveTo(90*scale+dx, 50*scale+dy)
  ctx.arc(80*scale+dx, 50*scale+dy, 10*scale, 0, 2 * Math.PI)
  ctx.rect(10*scale+dx, 85*scale+dy, 40*scale, 5*scale)
  ctx.fill()
}

const moveBird = timestamp => {
  if (stopping) return

  const angle = (timestamp / 20 % 360) / 180 * Math.PI
  const scale = 0.3
  const dx = 70 + 70 * Math.cos(angle*2)
  const dy = 70 + 70 * Math.sin(angle*5)
  drawBird(scale, dx, dy)

  requestAnimationFrame(moveBird)
}

let ctx
let stopping = true
self.addEventListener("message", event => {
  if ("stop" in event.data) {
    stopping = true
  } else if (("canvas" in event.data || "start" in event.data) && stopping) {
    stopping = false
    if (!ctx) ctx = event.data.canvas.getContext("2d")
    requestAnimationFrame(moveBird)
  }
})
