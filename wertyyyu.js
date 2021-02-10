let boton = document.querySelector("#funcion1")
let parrafo = document.querySelector("#p1")
boton.onclick = changeColor
function changeColor(){     
     let green = Math.floor(Math.random() * 226)
    let red = Math.floor(Math.random() * 226)
    let blue = Math.floor(Math.random() * 226)
    parrafo.style.color = `rgb(${green},${red},${blue})`}
    let boton2 = document.querySelector("#funcion2")
let pn2 = document.querySelector("#p2")
boton2.onclick = parte2
function parte2(){
    if (pn2.innerHTML == ""){
        pn2.innerHTML =" A Rodrigo le gusta comer aguacate        "
    }
    else{
        pn2.innerHTML = ""
    }
}
let boton3 = document.querySelector("#funcion3")
let p3 = document.querySelector("#p3")
boton3.onclick = desapariciontemporal
function desapariciontemporal(){
    p3.style.display = "none"
    setTimeout(devolver, 3000);
}
function devolver(){
    p3.style.display = "block"
}