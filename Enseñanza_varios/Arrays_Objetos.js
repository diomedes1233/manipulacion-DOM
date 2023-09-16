/*
Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
R/ Un array es una lista de elementos ordenada o desordenada donde podemos guardar elementos de diferente tipo como const 
array = [1, "string", true, false, {nombre: "Edwin", edad: "39""}]

¿Qué es un objeto?
Un objeto es una lista de elementos, pero cada elemento tiene un nombre o key clave y valor + lo mismo que el array:
const obj = {
    nombre: "Edwin",
    edad: "39",
    comidasFavoritas: [
        "Pollo frito",
        "Vejetales",

    ]
}

¿Cuándo es mejor usar objetos o arrays?

Arrays cuando lo que haremos es un elemento q es lo mismo en todos los demas (la regla se puedes incumplir). Mientras q un objeto, cuando los nombres de cada elemento son importantes para nuestro algorismo. 

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Si. los Arrays puedes guardar Objetos. y los Object pueden guardar Arrays entre sus propiedades */
/*

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima 
su primer elemento.
*/

function inprimirPrimerElementoArray(arr){
    console.log(arr[1])
}

//inprimirPrimerElementoArray(["juan", "Kevin", "Miror", "Dario"])

/* 
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima 
todos sus elementos uno por uno (no se vale imprimir el array completo).
*/
function inprimirElementoPorElemento(arr){
    for(let i=0; i < arr.length; i++){
        console.log(arr[i])
    }
}

//inprimirElementoPorElemento(["juan", "Kevin", "Miror", "Dario"])

/*
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima 
todos sus elementos uno por uno (no se vale imprimir el objeto completo).
*/ 

const obj = {
    nombre: "Edwin",
    edad: "39",
    comidasFavoritas: [
        "Pollo frito",
        "Vejetales",

    ]
}

//console.log(Object.values(obj));

//const arr = Object.values(obj);

function inprimirElementoPorElementoObjetos(obj){
    const arr = Object.values(obj);
    for(let i=0; i < arr.length; i++){
        console.log(arr[i])
    }
}

inprimirElementoPorElementoObjetos(obj)