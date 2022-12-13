//coleccion de elementos que puedejn ser accedidos a traves de un indice[0]
//let Array = []
//length(Para sacar la longitud del arreglo)
//No es lo mismo posicion que eleento
let names = [ 2,'coco','mica','juan',[1,2,3]]
console.log(names[1][2] )

//Asignar valores
// forma literal
let lista = [1,2,'123']
// con metodos 
//Agrega un elemento que le pases en los parentesis al arr
lista.push("este argumento fue pusheado",12)
//Elimina(lo corta)el ultimo elemento ==> no recibe nada dentro de los parentesis
const num = lista.pop()
console.log(lista)
console.log(num)

//Rrecorriendo un arr 
let arrRecorrido = [1,'pepe','ana pasha bobo',10,2]
                  // 0  // 1    /  /2            //3 //4

for(let i = 0;i<arrRecorrido.length;i++){
    console.log(arrRecorrido[i],i)
}

while(arrRecorrido.length > 0){
    console.log(arrRecorrido.pop())
   
}
console.log(arrRecorrido)






