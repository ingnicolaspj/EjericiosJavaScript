//Autor
//Cuando lo hiceron

// Traversing the DOM

const navegacion = document.querySelector('.navegacion');

// console.log(navegacion.firstElementChild);
// console.log(navegacion.lastElementChild);

// console.log(navegacion.childNodes); //Los espacios en blanco son considerados en elementos

// console.log(navegacion.children);

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');

// console.log(card.children);

// card.children[1].children[1].textContent = 'Concierto de Música Clasica';

// console.log(card.children[1].children[1]);

// card.children[0].src = 'img/hacer2.jpg';
// console.log(card.children[0]);

//Traversing de hijo a padre

console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement);

console.log(card.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(3)');
console.log(ultimoCard.previousElementSibling);