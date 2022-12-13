// distintos caminos de acuerdo, a las condiciones

//ejemplo saber si una persona puede manejar o no
let edad = 9
function puedeManejar(edad){
    if(edad >=18){
     return("si puede manejar")
    }else{
     return("No puede manejar")
    }
}
console.log(puedeManejar(edad))