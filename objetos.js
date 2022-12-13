//Javascript esta diseñado sobre el paradigma simple basado en objetos
//Un objeto es una colleccion de propiedades,y una propiedad es una asociacion entre un nombre (clave) y un valor
//En conclusion conjunto de pares clave y valor
let persona = {
  name: "coco",
  age: 19,
  amigos: 12,
  calle: "villa allende",
  juegafutbol: true,
  // clave:valor
  verPersona: function () {
    console.log("Datos de persona");
    return {
      nombre: this.name,
      edad: this.age,
      ami: this.amigos,
      juegafulbo: this.juegafutbol,
    };
    //metodo de el obj persona
  },
};
// }
//Representar cosas de la vida real
// console.log(persona.saludar())
// persona.calle = "avenida siempre viva"
// persona.CantAmigos = 0
// delete persona.CantAmigos
// console.log(persona)
console.log(persona.verPersona());
//Como accedemos a sus propiedades
//Forma mas facil de acceder
// ==> Dot Notation(el punto)
//console.log(objeto.propiedad)

//Key word ==> THIS(Hace referencia a lo que se quiere apuntar)


//Constructor
function saludo() {
  return `Hola ${this.nombre} `;
}
//obj1
let persona1 = {
  nombre: "claudio",
  age: 50,
  saludo,
};
//obj2
let persona2 = {
  nombre: "aniston",
  age: 20,
  saludo
};
console.log(persona1.saludo())
console.log(persona2.saludo())

//Array de objetos
let personas = [
    {
        nombre: "bradd ",
        age: 50,
        saludo,
      },
      //obj2
     {
        nombre: "lana",
        age: 20,
        saludo,
      }
]

console.log(personas[0].saludo())
console.log(personas[1].saludo())
 