sumar();

function sumar (a, b){
    return a + b;
}

const res = sumar(2, 3);
console.log(res);

//Ejemplo más avanzado

let total = 0;

// function agregarCarrito ( precio ){
//     return total += precio;
// }

const agregarCarrito = precio  =>  total += precio;

const calcularImpuesto = total => total * 1.15;


total = agregarCarrito( 300 );
total = agregarCarrito( 100 );
total = agregarCarrito( 600 );
total = agregarCarrito( 700 );

const totalPagar = calcularImpuesto( total );

console.log(`El total a pagar es de ${totalPagar}`);

console.log(total);