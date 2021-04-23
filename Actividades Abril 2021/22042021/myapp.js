// Las sentencias switch funcionan de una manera similar que las sentencias if else esta es una sentencia multiple donde podemos hacer multiples comparaciónes mediante a casos

// let numero = 4;
// let letra = "c";

// switch(numero){
//     case 1:
//     alert("El numero es un 1");
//     break;
//     case 2: alert("El numero es un 2");
//     break;
//     case 3: alert("El numero es un 3");
//     break;
//     default: alert("El numero no esta en los casos anteriores");
//     break;
// }

// switch(letra){
//     case 'a':
//     alert("La letra es una a");
//     break;
//     case 'b':
//     alert("La letra es una b");
//     break;
//     default:alert("La letra no esta dentro de los casos anteriores");
//     break
// }


let day;
// Domingo:0, Lunes:1, Martes:2, etc...
switch(new Date().getDay()){
    case 0:
        day = "Domingo";
    break;
    case 1:
        day = "Lunes";
    break;
    case 2:
        day = "Martes";
    break;
    case 3:
        day = "Miercoles";
    break;
    case 4:
        day = "Jueves";
    break;
    case 5:
        day = "Viernes";
    break;
}
document.getElementById("diaSemana").innerHTML = "Estas ingresando en mi página web el día "+day;



















