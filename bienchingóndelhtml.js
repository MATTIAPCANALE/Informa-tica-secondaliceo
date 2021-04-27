let canvas = document.querySelector("#yoh")

let ctx = canvas.getContext("2d")

ctx.lineWidth= 1

function dibujarPeon (x, y, tam, color) {
    ctx.fillStyle = color
    ctx.strokeStyle = "black"
    ctx.fillRect (x-(tam*(2)),y + (4*tam) ,tam*(17/5),tam/(5/2))
    ctx.strokeRect (x-(tam*(2)),y+(4*tam),tam*(17/5),tam/(5/2))
    ctx.beginPath()
    ctx.arc(x+(tam*(81/25)), y + (tam*(7/5)), tam*(14/5),4*Math.PI/5 , Math.PI)
    ctx.arc(x-(tam*(81/25)), y + (tam*(7/5)), tam*(14/5),0 , Math.PI/5)
    ctx.moveTo(x - tam, y+(tam*(7/5)))
    ctx.lineTo(x + tam,y+(tam*(7/5)))
    ctx.lineTo(x + tam/(5/4), y+tam)
    ctx.moveTo(x - tam/(5/4), y+tam)
    ctx.lineTo(x + tam/(5/4), y+tam)
    ctx.moveTo(x, y)
    ctx.arc(x, y, tam,0 ,2*Math.PI)
    ctx.moveTo(x - tam/(5/4), y+tam)
    ctx.lineTo(x - tam, y+(tam*(7/5)))
    ctx.lineTo(x + tam/(5/4), y+tam)
    ctx.stroke ()
    ctx.fill ()
    }
    dibujarPeon (200,500,40,"grey")