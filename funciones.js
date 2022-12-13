//Las funciones sirven para:
//Sirven para reutilizar codigo(No repitas codigo)
//Esto no:
// console.log("hola como estas soy coco ")
// console.log("Tenngo 33 años ")
// console.log("hola como estas soy juan")
// console.log("Tenngo 44 años ")

//Agrupar codigo para luego invocar y que se ejecute
//Declarada
function miFuncion(name,age){
    return `Mi nombre es ${name} y tengo ${age}` 
}
//Invocacion
console.log(miFuncion("coco",19))
//Expresada
const otraFuncion = function(name,age){}
//Arrow
const yOtra = () =>{}

// Argumentos(parametros)
// ==>lo que va dentro del parentesis y toma el valor de lo que le pasas cuando ibnvocas a la funcion

//Scope 
//==>(areas de delimitacion de variables)
// function(){
//     var scope local = 12
// }

//return
// ==>  es el resultado de en lo que se transforma la funcion
// corta todo el codigo que hay  debajo