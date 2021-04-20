let canvas2=document.querySelector('#miCanvas2')
let ctx = canvas2.getContext("2d")
function straightline(x){

let FirstSquareY=70
let SecondSquareY=25


ctx.beginPath()
do{
ctx.fillRect(x,SecondSquareY,46, 45)
ctx.strokeRect(x+1,FirstSquareY,44, 44)
ctx.strokeRect(x+46,SecondSquareY,44, 44);
ctx.fillRect(x+45,FirstSquareY,46, 45)


FirstSquareY=FirstSquareY+90;
SecondSquareY=SecondSquareY+90}
while(FirstSquareY<341)}

let Xcambio=25
do{
straightline(Xcambio)
Xcambio=Xcambio+90}
while(Xcambio<361)


function DrawPawn(x,y){
ctx.beginPath()
ctx.lineWidth= 1

ctx.strokeStyle="#F9E4B7"
ctx.arc(x+3, 35+y, 6, Math.PI*0, 2* Math.PI);

ctx.moveTo(x+3,41+y)
ctx.lineTo(x-6,42+y)
ctx.lineTo(x+3,43+y)
ctx.lineTo(x,49+y)
ctx.lineTo(x-3,53+y)
ctx.lineTo(x-4,54+y)
ctx.lineTo(x-5,56+y)
ctx.lineTo(x-13,60+y)
ctx.lineTo(x-13,64+y)
ctx.lineTo(x+19,64+y)
ctx.lineTo(x+19,60+y)
ctx.lineTo(x+11,56+y)
ctx.lineTo(x+9,54+y)
ctx.lineTo(x+9,53+y)
ctx.lineTo(x+6,49+y)
ctx.lineTo(x+3,43+y)
ctx.lineTo(x+11,42+y)
ctx.lineTo(x+3,41+y)

ctx.stroke()}
let xBase=45
for(let xBase=45; xBase < 361; xBase= xBase+45){

    DrawPawn(xBase,45)
    ctx.fillStyle = "black"
    ctx.fill()
    }
    

for(let xBase2=45; xBase2< 361; xBase2= xBase2+45){
    DrawPawn(xBase2,270)
    ctx.fillStyle="White"
    ctx.fill()
    ctx.stroke()
    }


    DrawPawn(300,350)