const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponibilidad: true,
}

const medidas = {
    peso:'1kg',
    medida:'1m'
}

console.log(producto);
console.log(medidas);

// .assing es para unir dos objetos
const resultado = Object.assign(producto, medidas);

// Spead Operator o Rest Operator
const resultado2 = {...producto,...medidas}

console.log(resultado);
console.log(resultado2);