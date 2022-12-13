function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y) {
    return x;
  } else if (x < y) {
    return y;
  } else {
    return " son iguales";
  }
}
console.log(obtenerMayor(33, 33));

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad >= 18) {
    console.log("Allowed");
  } else {
    console.log("Not Allowed");
  }
}
mayoriaDeEdad(9);

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch (idioma) {
    case "aleman":
      console.log("Guten Tag!");
      break;
    case "mandarin":
      console.log("Ni Hao!!");
      break;
    case "ingles":
      console.log("hello");
      break;
    default:
      console.log("Hola");
  }
}
saludo("aleman");

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
    case "blue":
      console.log("This is blue");
      break;
    case "red":
      console.log("This is red");
      break;
    case "green":
      console.log("This is green");
      break;
    case "orange":
      console.log("This is orange");
      break;
    default:
      console.log("Color not found");
  }
}
colors("red")

// function esEntero(numero) {
//     // Devuelve "true" si "numero" es un entero (int/integer)
//     // Ejemplo: 0.8 -> false
//     // Ejemplo: 1 -> true
//     // Ejemplo: -10 -> true
//     // De lo contrario, devuelve "false"
//     // Pista: Puedes resolver esto usando `Math.floor`
//     // Tu código:
//     if(numero % 1 === 0){
//        console.log("true")
//     }else{
//         console.log("false")
//     }
//   }
//   esEntero(32)

  function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos,divisible por si mismo y por uno
    if(numero % numero == 1  && numero / 1 == numero){
        console.log("true")
    }else{
        console.log("false")
    }
  }
  esPrimo(2)
