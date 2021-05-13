//FIZZ BUZZ
// 3 6 9 ... FIZZ
// 5 10 15 ... BUZZ
// 15 30 45 ... FIZZ BUZZ

// const meses =  new Array('Enero', 'Febrero', 'Marzo');

// console.log(numeros);
// console.log(meses);

// //Un arreglo puede contener datos de todo tipo

// const deTodo = ['Hola', 10, true, null, 'si',{ nombre: 'Carlos',trabajo:'DBA'}, [1,2,3] ];

// console.log(deTodo);

// const numeros = [10, 20, 30, 40, 50 ,[1, 2, 3,['a','b','c']]];

// console.log(numeros);
// console.table(numeros);

// //Acceder al arreglo

// console.log(numeros[3]);
// console.log(numeros[20]);
// console.log(numeros[5][1]);
// console.log(numeros[5][3][2]);

// console.log(numeros.lengt);

// for(let i = 0; i < numeros.length;i++){
//     console.log(numeros[i]);
// }

// const meses =  ['Enero', 'Febrero', 'Marzo'];

// meses[0] = 'Nuevo Mes';
// meses[3] = 'Abril';


// console.table(meses);

// const carrito = [];

// //Definir un producto
// const producto = {
//     nombre:'Monitor Curvo 32 Pulgadas',
//     precio: 7000,
//     disponible: true
// }
// const producto2 = {
//     nombre:'Monitor Plano de 20 Pulgadas',
//     precio: 5000,
//     disponible: false
// }

// const producto3 = {
//     nombre:'Disco duro 1TB',
//     precio: 1400
// }

// //Agregar elementos al principio
// // carrito.unshift(producto3);

// carrito.push(producto);
// carrito.push(producto2);
// carrito.push(producto3);

// let resultado;

//Forma declarativa

// resultado = [...carrito, producto];

// resultado =  [...resultado, producto2];
// resultado =  [...resultado, producto3];

//Elimnar el ultimo elemento del arreglo
// carrito.pop();
// console.table(carrito);

//Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

// carrito.splice(3,1);
// console.log(carrito);

// const meses =  ['Enero', 'Marzo', 'Abril','Junio'];
// meses.splice(1,0,'Febrero');
// console.table(meses);

// meses.splice(4,1,'Mayo');

// console.table(meses);

// const producto = {
//     nombre:'Monitor Curvo 32 Pulgadas',
//     precio: 7000,
//     disponible: true
// }

// const { nombre } = producto; 
// console.log(nombre);

// const numeros = [10,20,30,40,50];

// const [primero,...demas] = numeros;

// console.log(demas);

const carrito = [
    {nombre:'Monitor Curvo 32 Pulgadas',precio: 7000},
    {nombre:'Tablet',precio: 5000},
    {nombre:'Xbox Series X',precio: 14000},
    {nombre:'PS5',precio: 15000}
]

for(let i = 0; i < carrito.length;i++){
        console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));

const autententicado = false;

if(autententicado){
    console.log('Entrando al sistema...');
}else{
    console.log('Error...');
}

console.log(autententicado ? 'Si esta autenticado' : 'No esta autenticado');