//
//Repetir un bloque de codigo las veces necesarias
// i => variable a la cual igualo; 
//cuantas veces quiero que de vuelttas; 
// si quiero que sume o reste
// for(let i = 0;i<100;i++){
//     console.log(i)
// }
function imprimeunoan(n){
    for (let i = 1; i <= n; i++) {  
        if(i % 2 === 0 && i < 200){
            console.log("este es par",i)
        }else{
            console.log("este es impar",i)
        }
    }
}

//Numeross pares
//num % 2 === 0

//Numeross impares
//num % 2 === 1

//buvcle anidado
function matriz(n,m){
    let matriz = []
    for (let i = 0; i < n ; i++) {
        // const element = array[i];
        for (let j = 0; j < m; j++) {
            // const element = array[j];
            console.table(i + " , "+j)
            
        }
    }
}
matriz(2,2)

//while
//se utiliza cuando no sabes lo que vas a recorrer
// while ( condicion ){
//     bloque de codigo
// }

let i = 0
while(i <= 100){
    if(i % 2 === 1){
        console.log(i)
    }
    i++;
}

function matriz2 (f,c){
    let j = 0;
    let i = 0;
    while(i < f){
        while(j < c){
            console.log(i,j)
            j++
        }
        j = 0;
        i++
    }
}

// WHILE VS FOR
//==> en el for vos sabes lo que vas a recorrer 
//==> en el while estas buscando una condicion que suceda