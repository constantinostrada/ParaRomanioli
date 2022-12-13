//¿Cuales son las funciones callbacks?
//Javascript es un lenguaje que trata las fuinciones como First Class
//callback
//==> La capacidad de pasar una funcion como argumento en  otra funcion
//==>Las funciones callback son una forma de asegurarnos que un codigo no se ejecuta hasta que otro codigo haya terminado de ejecutarse
//El codigo se ejecuta de arriba  hacia abajo
//Nos permit


function decirHolaUser (user){
    return `Hola ${user}`
}
function decirAdiosUser (user){
    return `Adios ${user}`
}
function crearSaludo(user,cb){
    return cb(user)
}

console.log(crearSaludo("carlos",decirHolaUser))

function callback(){
    console.log("Yo soy un callback");
}


function mensaje(fn){
    //Ejecutamosla funcion
    fn()
}
console.log(mensaje(callback));

//Cuando las utilizo
function funcion1(fn){
    setTimeout(function(){
        console.log("mensaje1")
        fn()
    },1000)
}
function funcion2(){
    console.log("mensaje 2");
}
console.log(funcion1(funcion2))

// function primero (fn){
//     setTimeout(() => {
//         console.log("primero")
//         fn()
//     }, 5000);
    
// }

// function segundo (){
//     console.log("Segundoo")
// }
// primero(segundo)

//Callback en los arreglos
let alumnos = ['mati','leo','tinchi','emi','jymmi','franco']

//Forma imperativa
for(let i = 0;i < alumnos.length;i++){
    console.log(alumnos[i])
}


//For each reccorre un arreglo que le pasamos
alumnos.forEach(function(ele,index){
    console.log(ele)
})

//El metodo map crea un nuevo arreglo con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos
//Recorre y guarda en una nueva variable el resultado  
let numeros = [2,3,4,5,6]
let losDobles = numeros.map((e)=>{ return e * 2})
console.log(losDobles)

//Reduce()
//Reduce el resultado a un unico valor
//recibe 4 argumentos 
//==> Acumulador (Obligatorio)
//==> valor actual (Obligatorio)
//==> indice actual
//==> array

let sumarNums = [1,2,3,4,5,6,7]
//de forma imperativa
let sumaFinal = 0;
for (let i  = 0;i  < sumarNums.length; i++) {
    // const element = array[];
    sumaFinal = sumaFinal + sumarNums[i]
}
console.log(sumaFinal)

//Funcional
let sumaConReduce = sumarNums.reduce(function(acc,ele){
    return acc * ele
},1)
console.log(sumaConReduce)