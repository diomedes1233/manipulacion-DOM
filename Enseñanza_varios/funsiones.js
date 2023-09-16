/*
¿Qué es una función?
R/ Es la forma en que encapsulamos bloques de codigo para q sean utilizables y 
ejecutables en el futuro

¿Cuándo me sirve usar una función en mi código?
R/ Cuando tenemos variable o bloque de codigo muy parecidos(con cambios que porian ser parametros o argumentos) que podemos encapsular para reutilizar mas de una vez en el futuro. Tambien nos sirbe para ordenar y mejorar la legibilidad
de nuestro codigo

¿Cuál es la diferencia entre parámetros y argumentos de una función?
R/ Las funciones reciben parametros cuando las estamos creando, para poder ejecutarlas debemos enviarle los argumentos que anteriormete fueron inicializados por los argumentos.
*/

function nombreCompleto(name, lastName){
    return name + ' ' + lastName
}

console.log(nombreCompleto("Edwin", "Bernal"))

/*
Convierte el siguiente código en una función, pero, cambiando cuando sea 
necesario las variables constantes por parámetros y argumentos en una función:
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + 
nickname + ".");
*/ 

function saludo(name, lastname, username){
   const completeName = nombreCompleto(name, lastname);
   console.log("Mi nombre es: " + completeName + ", pero prefiero que me digas " + username + ".");

}

console.log(saludo("Edwin", "Bernal", "Diomedes"))
