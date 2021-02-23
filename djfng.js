let planetas = [
    {Materia:"Informática", Descripción:"Hacer una tarea de informática que tenga todas las tareas.",Fecha:"2021-02-23"},
    {Materia:"Historia", Descripción:"Estudiar la crisis del 1300",Fecha:"2021-02-26"},
    {Materia:"Matemáticas", Descripción:"Evaluación f. raciones, exponenciales y polinómicas",Fecha:"2021-03-02"},
]

let tabla = document.querySelector('#planetas')
function llenarTabla(){
    let contenidoTabla = '<tr><th>Materia</th><th>Descripción</th><th>Fecha</th></tr>'
    for (planeta of planetas){
        contenidoTabla = contenidoTabla + `<tr><td>${planeta.Materia}</td><td>${planeta.Descripción}</td>
        <td> ${planeta.Fecha}</td></tr>`
    }
    tabla.innerHTML = contenidoTabla;
}

let form = document.querySelector("#formularioAdd");

function addPlanet(){
    
    let nombreNuevo = document.querySelector("input[name=nombre]").value

    let diametroNuevo = document.querySelector("input[name=diametro]").value
   
    let urlNuevo = document.querySelector("input[name=urlImagen]").value
   
    let planetaNuevo = {Materia:nombreNuevo, Descripción:diametroNuevo, Fecha:urlNuevo}
    console.log("Ahora voy a añadir el siguiente planeta");
    console.log(planetaNuevo)

    planetas.push(planetaNuevo)

    llenarTabla();
    return false;
}

form.onsubmit = addPlanet;



llenarTabla();