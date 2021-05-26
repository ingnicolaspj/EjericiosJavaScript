const h1 =  document.querySelector('b');
console.log(h1);


//Dom traversing



const reproductor = {
        reproducir: (id = 'Sin id') => console.log(`Reproduciendo canción con el id ${id}`),
        // pausar: function(){
        //     console.log('pausando...');
        // },
        // borrar: function(id){
        //     console.log(`Borrando canción con el id ${id}`);
        // },
        // playList: function(nombre){
        //     console.log(`La lista de reproducción es ${nombre}`);
        // }

        set nuevaCancion(cancion){
            this.cancion = cancion;
            console.log(`Añadiendo ${cancion}`);
        },
        get obtenerCancion(){
            console.log(`${this.cancion}`);
        }
}

reproductor.nuevaCancion = 'Bliding lights';
reproductor.obtenerCancion;

reproductor.reproducir(30);
// reproductor.pausar();
// reproductor.borrar(30);
// reproductor.playList('Favoritos');






// function nombreCancion (nombre = 'Sin nombre'){
//     console.log(nombre);
// }

// nombreCancion();
// const cancion = (nombre) => `La cancion es ${nombre}`

// cancion('Clasica');
// console.log(cancion);