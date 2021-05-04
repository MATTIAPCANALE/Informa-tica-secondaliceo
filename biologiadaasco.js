let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")



// function nombreFuncion ( parámetros o argumentos )
function dibujarpeon (x, y, tam, color) {
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



// Utilizo la función, y entre paréntesis paso a ella los
// parámetros.
// Voy a hacer un lapiz que se mueva a 10 pixeles por segundo hacia la derecha

// cada 30 milisegundos se debe hacer esto:
// borrar todo
// cambiar la posicion x del lapiz
// dibujar el lapiz

let x = 150;// La coordenada x del lapiz
let y = 200;
let vX = 40; // en px/s
let dT = 30; // en milisegundos
let x1= 300
let y1= 100;
let vX0 = 200; // en px/s
let x2= 600;
let y2= 0;
let vX1 = 100; // en px/s
let vY1 = 100; // en px/s


function moverYDibujar1(){
  
    ctx.clearRect(0,0, 600, 400);
    if (x<450) {
        let dX = (dT/1000) * vX;// desplazamiento
        x = x + dX;// se cambia el valor de la x
        y = 200
       dibujarpeon (x, y, 20,"blue");    
    }   
    if (y1<300) {
        let dy = (dT/1000) * vX0;// desplazamiento
        y1 = y1 + dy;// se cambia el valor de la x
        x1 = 300
       dibujarpeon (x1, y1, 20,"red");    

    }  
    if (y2<400) {
        let dx2 = (dT/1000) * vX1;// desplazamiento
        x2 = x2 -dx2;// se cambia el valor de la x
        let dy2 = ((dT/1000) * vY1)
    y2 = y2+dy2
       dibujarpeon (x2, y2, 20,"black");    }
}

    

// La funcion se debe ejecuar cada dT milisegundos
window.setInterval(moverYDibujar1, dT);
