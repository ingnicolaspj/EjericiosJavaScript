const encabezado = document.querySelector('.contenedor');
console.log(encabezado);

console.log(encabezado.innerText);// si en el CSS tiene visibility: hidden no lo va encontrar

console.log(encabezado.textContent);// so lo va a encontrar
console.log(encabezado.innerHTML); // se traer el HMTL y podemos generarlo

const nuevoEncabezado = 'Otra cosa';

document.querySelector('.contenedor h1').textContent = nuevoEncabezado;

console.log(nuevoEncabezado);

console.log(encabezado.style);

encabezado.style.color = 'red';
encabezado.style.fontFamily = 'sans-serif';
encabezado.style.textTransform = 'uppercase';
encabezado.style.backgroundColor = 'orange';

const addClassh1 = document.querySelector('h1');

addClassh1.classList.add('nueva-clase', 'segunda-clase');
addClassh1.classList.remove('segunda-clase');
addClassh1.classList.remove('clase1');

console.log(addClassh1);


const enlace = document.createElement('a');

//Agregando texto 
enlace.textContent = 'Ir a Facbook';

enlace.href = '/nuevo-enlace';

enlace.target = '_blank';

// enlace.onclick = myFuncion;

const parrafo = document.createElement('P');

parrafo.textContent = 'Concierto';

document.write(parrafo);

console.log(parrafo);
console.log(enlace);