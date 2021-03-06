//Pededirle al usuario un numero por medio de un prompt y cuando le de aceptar le indique en el navegador si este número es par o impar

/* let numero = prompt("Dame un numero");

if(numero%2 == 0 ){
    document.write(`<h1>El numero ${numero} es par</h1>`);
}else{
    document.write(`<h1>El numero ${numero} es impar`);
} */
//Enunciado ejercicio 1
/* 
Escribe un programa que pregunte al usuario si es culpable o no.Asumiremos que:En caso afirmativo el usuario responderá si
En caso contrario responderá no. Si el usuario responde si se escribirá por el documento «irás a la cárcel».Si el usuario responde no se escribirá por el documento web «irás a casa» En cualquier caso en el documento web se escribirá «la documentación por favor». */

let culpable = prompt("¿Eres culplable?");

if(culpable == "Si" || culpable == "si"){
    document.write("Irás a la cárcel");
}else if(culpable == "No" || culpable == "no"){
    document.write("Irás a casa");
}else{
    document.write("La documentación por favor");
}

/* Enunciado ejercicio 2

Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuanto le costará en función del topping que elija.

El helado sin topping cuesta 1.90€.
El topping de oreo cuesta 1€.
El topping de KitKat cuesta 1.50€.
El topping de brownie cuesta 0.75€.
El topping de lacasitos cuesta 0.95€.
En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla «no tenemos este topping, lo sentimos. » y a continuación informar del precio del helado sin ningún topping.

Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno). */