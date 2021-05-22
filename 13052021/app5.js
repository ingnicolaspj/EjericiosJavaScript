// const carrito = [
//     {nombre: 'Monitor de 27 Pulgadas', precio:2500},
//     {nombre: 'Xbox One ', precio:5000},
//     {nombre: 'PS5', precio:12000},
//     {nombre: 'Xbox Series X', precio:14000},
//     {nombre: 'Monitor Curvo 40 Pulgadas', precio:6000},
//     {nombre: 'Control Xbox Series X', precio:1450},
// ]

// //Va a llenar un variable con un arreglo nuevo
// const nuevoArreglo = carrito.map( function(producto){
//     return `${producto.nombre} - Precio: ${producto.precio}`;
// });

// const nuevoArreglo2 = carrito.forEach( function(producto){
//     return `${producto.nombre} - Precio: ${producto.precio}`;
// });

// console.log(nuevoArreglo);
// console.log(nuevoArreglo2);


// const numero1 = 20;
// const numero2 = '20';

// console.log(numero1.toString());// Esto es un metodo
// console.log(parseInt(numero2));// Es una función

// function saludar(nombre = 'Desconicido',apellido="Sin apellido"){
//     console.log(`Hola ${nombre} ${apellido}`);
// }

// saludar('Chavero',);

inciarApp();

const inciarApp(){
    console.log('Iniciando app ...');
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda función');
    usuarioAutenticado('Nico');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario ... espere..');
    console.log(`Usuario autenticado exitotasamente: ${usuario}`);
}