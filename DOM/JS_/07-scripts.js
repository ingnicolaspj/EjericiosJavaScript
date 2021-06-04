// const primerEnlace = document.querySelector('a');

// primerEnlace.remove();
// console.log(primerEnlace);

//Elimnar desde el padre

// const navegacion = document.querySelector('.navegacion');

// console.log(navegacion.children);

// navegacion.removeChild(navegacion.children[2]);

const enlace = document.createElement('A');

//Agregando el texto
enlace.textContent = 'Galeria';

//Añadiendo target
enlace.target = "_blank";

enlace.href = '/nuevo-enlace';

enlace.onclick = miFuncion;

console.log(enlace);

const navegacion = document.querySelector('.navegacion');

// navegacion.appendChild(enlace);
console.log(navegacion.children);

navegacion.insertBefore(enlace, navegacion.children[2] );


function miFuncion(){
    alert('Diste click');
}