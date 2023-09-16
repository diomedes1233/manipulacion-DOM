/*
Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
R/ Es la forma de ejecutar un bloque de codigo hasta que se cumpla cierta condición.

¿Qué tipos de ciclos existen en JavaScript?
R/ Exiten el While, Do While, for. 

¿Qué es un ciclo infinito y por qué es un problema?
R/ Es cuando la validación de nuestros condicionales nunca se cumple y totea la aplicación y en navegador no puede mas con tanta ejecución de ese bloque de codigo.

¿Puedo mezclar ciclos y condicionales?

Si, aunque los ciclos son una especie de condicionales, nada nos impide agregar mas condicionales dentro del ciclo.

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos 

while: */
console.log("----------------for_suma---------------")
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

console.log("---------------while_suma----------------")

let i = 0;
while(i < 5){
    console.log("El valor de i es: " + i); 
    i++;
}

console.log("----------------for_resta---------------")

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

console.log("---------------while_suma----------------")

let j = 10;
while(j >= 2){
    console.log("El valor de i es: " + j); 
    j--;
}



/*
3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 
2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden 
mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.*/

let respuesta;

while(respuesta != 4){
    let pregunta = prompt("Cuanto es 2 + 2?")
    respuesta = pregunta
    if(respuesta == 4){
    alert("La respuesta era: " + pregunta + " " + "Filisitaciones")
    }
}