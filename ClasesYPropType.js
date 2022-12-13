
// Una clase 
//==>es una plantilla para la creacion de Objetos segun un modelo predefinido
//==>Es lo mas general y abstracto de la vida real
//==>Es un molde general para crear Objetos
//Relaciones:
//clase Animal 
// un perro es un animal 
// un gato es un animal

//Funciones Constructoras
//==> Nos permite crear Objetos
// ==> Por convencion empieza con Mayuscula
//==> No retorna 
//==> Iguala los parametros con la palabra This
function Persona(name,lastname){
    this.firstName = name || 'Rellena este campo pa'// defaut operator(rellena un valor por defecto)
    this.lastName= lastname || "rellena este otro dawn"
}
let p1 = new Persona()
console.log(p1)

//Funcion constructora
function Car(marca,cv,color){
    this.marca = marca,
    this.cv = cv,
    this.color=color
}
//objetos que instancio
let auto1 = new Car('audi',1500,'rojo')
let golcitoPlanchadoalsopi = new Car('trend',1000,'azul')

console.log(auto1)
console.log(golcitoPlanchadoalsopi)

//Protype(Prototipo) 
//Todo obj tiene como referencia a otro objeto llamado proto
let obj = {}
// console.log(obj.__proto__)


function Edadesp (edad){
    return this.edad = edad
}
Edadesp.prototype.getedad = function(){
    return `Tiene ${this.edad} anios`
}
//Instancio los Objetos 
let e1 = new Edadesp(23)
let e2 = new Edadesp(3)
let e3 = new Edadesp(33)
let e4 = new Edadesp(44)

console.log(e4.getedad())

//New 
// let obj = {}
// return Persona(edad).bind(obj)
//obj.__proto__ = persona.prototype


//Repaso clases y prototype
//Herencia basada en prototipo
//un obj busca una prop, si esta en el la saca de ahi, sino esta ela busca en el prototipo ==> no esta en ningun lado tira un error

function People (name,last){
    this.name = name
    this.last = last
}
//Instancio las personas

let persona1 = new People("nico","cuenca")
let persona2 = new People("sexo","fernandez")
let persona3 = new People("javier","perez")

//metodo
People.prototype.getDatePeople = function(){
    return `La persona se llama ${this.name} y se apellida ${this.last}`
}

console.log(persona2.getDatePeople())

//
console.log("-----------Object.create y pure prototypal inheritance-----------------")

let person = {
    nombre: "",
    apellido:""
};
let toni = Object.create(person)
toni.nombre = "tony"
toni.apellido = "pioletti"
console.log(toni)
//Object es el obnjeto padre(alfa), tiene un metodo que se llama create
// console.log(toni)
// console.log(toni.__proto__)









//
console.log("-----------ES6--CLASES--------------------------------------")
class Perro {
    constructor (nombre,raza){
        this.nombre = nombre 
        this.raza = raza
    }

    mostrarPerro(){
        console.log(`Se llama ${this.nombre} y su raza es ${this.raza}`)
    }


}
let perro1 = new Perro("toto","dogo")
console.log(perro1);