let canvas=document.querySelector('#miCanvas')
let ctx = canvas.getContext("2d")
ctx.fillStyle = "violet"
ctx.strokeStyle = "black"
ctx.fillRect(50, 0 , 130, 45)
ctx.fillStyle = "red"

ctx.lineWidth= 1
ctx.strokeRect(50,0,130, 45)
ctx.strokeRect(50,15,130, 15)
ctx.beginPath()
ctx.fillArc= "red"
ctx.arc(180, 23, 23, Math.PI*1.5, 2.5* Math.PI);
ctx.fill()
ctx.beginPath()

ctx.moveTo(0, 23)
ctx.lineTo(50, 0)
ctx.moveTo(0, 23)
ctx.lineTo(50, 45)
ctx.moveTo(0, 23)
ctx.lineTo(20, 15)
ctx.moveTo(0, 23)
ctx.lineTo(20, 30)
ctx.lineTo(20, 15)
ctx.stroke()
ctx.stroke()
ctx.fillStyle = "black"
ctx.fill()
ctx.moveTo(0,50)
// celuco
ctx.fillStyle = "black"
ctx.fillStyle = "grey"
ctx.fillRect(3,71,230, 400)

ctx.fillStyle = "blue"
ctx.fillRect(45, 84 ,140, 300)
ctx.beginPath()
ctx.fillStyle = "red"
ctx.fillRect(100,340,9, 9)
ctx.fillRect(110,340,9, 9)
ctx.fillRect(120,340,9, 9)
ctx.fillRect(100,350,9, 9)
ctx.fillRect(110,350,9, 9)
ctx.fillRect(120,350,9, 9)
ctx.fillRect(100,360,9, 9)
ctx.fillRect(110,360,9, 9)
ctx.fillRect(120,360,9, 9)
ctx.fillRect(100,370,9, 9)
ctx.fillRect(110,370,9, 9)
ctx.fillRect(120,370,9, 9)

//ctx.endPath()


