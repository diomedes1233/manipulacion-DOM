/*Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
R/ Son la forma en que ejecutamos un bloque de codigo u otro dependiendo de alguna condición o validación. existen: IF(else y else if), Switch
El condicional if(con else y else if) nos permite hacer validaciones completamente distintas (si y asi queremos) en cada validación o condicional. En cambio, el Switch todos los cambios se comparan con la misma variable o condición que definimos en el Switch.

¿Puedo combinar funciones y condicionales?
R/ si las funciones pueden encapsular cualquier bloque de codigo, e incluso condicionales.

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch 
utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un 
mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un 
año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi 
durante un año");
       break;
}
*/

/*
const tipoDeSuscripcion = "Free";

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");

    } else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

    }else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

    }else if(tipoDeSuscripcion == "ExpertDuo"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//console.log(tipoDeSuscripcion)
*/

/*
3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, 
pero ahora solo con if (sin else ni else if).
*/

/*
function conseguirTipoDeSuscripcion(suscripcion){
    if (suscripcion == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion == "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if(suscripcion == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    if(suscripcion == "ExpertDuo"){console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    return;
    }
    console.warn("Este tipo de suscripción no existe")
}

conseguirTipoDeSuscripcion('Expert');

*/

/*
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar 
cómo replicar este comportamiento con arrays u objetos y un solo condicional. */


const tiposDeSuscripciones = {
    Free: 'Solo puedes tomar los cursos gratis',
    Basic: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    Expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    ExpertDuo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
}

/*
console.log(tiposDeSuscripciones.Basic)
console.log(tiposDeSuscripciones['ExpertDuo'])
*/

function conseguirTipoDeSuscripcion(suscripcion){
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion])
        return;
    }
    console.warn("Este tipo de suscripción no existe")
}

conseguirTipoDeSuscripcion('ExpertDuo');
