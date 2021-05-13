const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponibilidad: true,
    mosrtarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

const producto2 = {
    nombre: 'Tablet',
    precio: 5000,
    disponibilidad: false,
    mosrtarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mosrtarInfo();
producto2.mosrtarInfo();
