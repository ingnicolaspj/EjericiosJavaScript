const tweet = '               Estamos aprendiendo JavaScript             ';
console.log(tweet);
console.log(tweet.trim());
console.log(tweet.trimEnd());
console.log(tweet.trimStart().trimEnd());
console.log(tweet.length);

const usuario = 'CORREO@GMAIL.COM';
console.log(usuario.toUpperCase());
console.log(usuario.toLowerCase());

console.log(usuario.charAt(2));

const num1 = 20;
console.log(Number.isSafeInteger(num1));

// "use strict";

// const producto = {
//     nombre:'Monitor de 20 Pulgadas',
//     precio: 30,
//     disponible: false,
//     informacion:{
//         medida:{
//             peso:'1kg',
//             longitud:'1m'
//         }
//     }
// }

// Object.freeze(producto);

// // producto.fabricacion = 'China';
// console.log(producto);

// console.log(Object.isFrozen(producto));



// const { nombre,precio,disponible,informacion,informacion:{medida, medida: { longitud } } } = producto;


// console.log(longitud);
// console.log(producto.informacion.medida.longitud);





//Destructuring
// const { nombre,precio,disponible,fabricacion } = producto;
// console.log(nombre);
// console.log(precio);
// console.log(disponible);
// console.log(fabricacion);

// //Agregar nuevas propiedades al objeto
// producto.imagen = 'imagen.jpg';

// //Eliminamos propiedades del objeto
// delete producto.disponible;
// console.log(producto);

// console.log(producto);

// console.log(producto.nombre);
// console.log(producto.precio);
// console.log(producto.disponible);
// console.log(producto.fabricacion);

// console.log(producto['nombre']);