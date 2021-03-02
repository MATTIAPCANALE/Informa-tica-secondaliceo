let conta= 1
if (conta=null){
localStorage.setItem("conta",JSON.stringify(conta))
alert("ha entrado 1 vez")}

else{
conta=JSON.parse(localStorage.getItem("conta"))
conta=conta+1
alert( `felicitaciones, has ingresado ${conta} veces a esta página, si ingresas una más esta cuenta se va a actualizar`)
localStorage.setItem("conta",JSON.stringify(conta))
}