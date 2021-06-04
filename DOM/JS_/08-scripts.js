// const primerEnlace =  document.querySelector('a');

// primerEnlace.remove();

// console.log(primerEnlace);

//Eliminando desde el padre

// const navegacion = document.querySelector('.navegacion');

// console.log(navegacion.children);

// navegacion.removeChild(navegacion.children[2]);

// Crar un card

const imagen = document.createElement('IMG');

imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto alternativo';

const parrafo1 = document.createElement('P');

parrafo1.textContent = 'CONCIERTO';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rammstein';
parrafo2.classList.add('titulo');
parrafo2.style.color = "red";

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//Crear div con clase info

const info =  document.createElement('DIV');

info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear div con clase card

const card = document.createElement('DIV');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);

//Asignar info
card.appendChild(info);

//Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);

// console.log(card);

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultar);

function mostrarOcultar(){
    //.contains nos va a permitir verificar si un elemento tiene o no tiene una clase
    if(footer.classList.contains('activo')){

        footer.classList.remove('activo');
        this.classList.remove('activo');// .this cuando das click y ejecuta una funcion hace referencia a lo que mando a llamar esa funcion
        this.textContent = 'Footer';

    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
    
}
// console.log(footer.classList);

// console.log(imagen);
// console.log(parrafo1);
// console.log(parrafo2);
// console.log(parrafo3);