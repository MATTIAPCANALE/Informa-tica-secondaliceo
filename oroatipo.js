let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")

function dibujaresfera(xC, yC, r, color){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
let x = 700;
let y = 0;
let r = 20;

let color = "red"
let vY = 10;
let dT = 30;

function moverYDibujar(){
    ctx.clearRect(0,0, 1600, 400);
    let dY = dT/1000*vY
    y = y + dY;
    dibujaresfera(x, y, r, color);
}

function arrancarOParar(){
    if (vY > 0){
        vY = 0;
    }
    else{
        vY = 10;
    }
}
window.setInterval(moverYDibujar, dT);

window.onkeyup = function(event){
      if (event.code == "Space")
    {
        arrancarOParar();
    }
 if (event.key == "+")
    {
        r=r+1
    } 
    if (event.key == "-")
    {
        r=r-1
    } 
}
let w= Math.random()
console.log(w)

 
window.onclick = function(event){
    
    let ClickX= event.offsetX 
    let ClickY = event.offsetY
  distancia = Math.sqrt (Math.pow (ClickX-x,2) + Math.pow (ClickY-y,2))
    if (distancia> r)
    { vY= -vY 
    }
    else {      
  color="#"+Math.floor(Math.random()*16777215).toString(16)
}
}

