// Object Literal
const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
}

//Para saber si el objeto tiene o no información
console.log(Object.keys(producto));

//Para mostrar los valores del objeto
console.log(Object.values(producto));

//Te devuelva todo en pares
console.log(Object.entries(producto));

Object.freeze(producto);

producto.imagen = 'imagen.jpg';
delete producto.nombre;
console.log(producto);

// Object Constructor
function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto ('Xbox', 5000);
console.log(producto2);

const producto3 = new Producto ('', 14000);
console.log(producto3);