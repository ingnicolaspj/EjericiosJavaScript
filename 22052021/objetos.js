// Object literal Object Contructor

const producto = {
    nombre:'Xbox Series X',
    precio:12000,
    disponible:true,
    informacion:{
        medidas:{
            peso:'1kg',
            medida:'1m'
        }
    }
}

const fabricacion = {
    pais:'China'
}


function Producto (nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('PS5',14000);
console.log(producto2);

//Para saber si el objeto tiene o no informacion
console.log(Object.keys(producto));

//Para mostrar los valores del objeto
console.log(Object.values(producto));

//Te devuleve todo en pares
console.log(Object.entries(producto));




//.assing une dos objetos
const resultado = Object.assign(producto, fabricacion);

//Spread Operator o Rest Operator
const resultado2 = {...producto,...fabricacion}

// console.log(resultado);
// console.log(resultado2);

Object.freeze(producto);

producto.imagen = 'imagen.jpg';
delete producto.precio;

// console.log(producto);

// console.log(Object.isFrozen(producto));

//Insertando propiedades a mi objeto

// producto.pais = 'China';
// delete producto.pais;
// console.log(producto.informacion.medidas.peso);

//Destructuring

// const { nombre, precio, disponible } = producto;

// console.log(nombre);
// console.log(precio);
// console.log(disponible);

// console.log(producto.precio);
// console.log(producto.nombre);
