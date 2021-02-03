let colores = [
    {nombre:"Gregorio", numeroganador:34,imagen:" https://www.provechososite.com/wp-content/uploads/2019/08/1275.jpg", nsemana:1},
    {nombre:"Marcela", numeroganador:7,imagen:"https://cdn.pixabay.com/photo/2015/04/04/19/13/seven-706891_1280.jpg",nsemana:2},
    {nombre:"Marcos", numeroganador:176,imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/US_176.svg/750px-US_176.svg.png",nsemana:3},
    {nombre:"Sergio", numeroganador:92,imagen:"https://upload.wikimedia.org/wikipedia/commons/4/43/ISR-HW-92.svg ",nsemana:4},
    {nombre:"Rodrigo", numeroganador:12,imagen: "https://upload.wikimedia.org/wikipedia/commons/a/ac/IOS_12_logo.svg",nsemana:5},
    {nombre:"Úrsula", numeroganador:1,imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Logo_TVE-1.svg/1200px-Logo_TVE-1.svg.png",nsemana:6},
]
let tabla = document.querySelector('#colores')
let contenidoTabla = '<tr><th>Nombre</th><th>Númeroganador</th><th>Imagen</th><th>Semana</th></tr>'
for (planeta of colores)
    contenidoTabla = contenidoTabla + `<tr><td>${planeta.nombre}</td><td>${planeta.numeroganador}</td> 
    <td><img width="500px" src="${planeta.imagen}" alt=""></td>  <td>${planeta.nsemana}</td></tr>`

tabla.innerHTML = contenidoTabla;

let mercad=[
    {nombre: "Huevos"},
    {nombre:"Pan"},
    {nombre:"Arroz"},
    {nombre:"Pescado"},
    {nombre:"Carne"}]
 
    let listamercado= document.querySelector('#mercancia')
    let listica= '<ul> </ul>'
    for(elemento of mercad){
 listica=listica+ `<li>${elemento.nombre}</li> `
  }
 listamercado.innerHTML=listica
 
