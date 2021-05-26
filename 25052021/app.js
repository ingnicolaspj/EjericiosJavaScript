let elemento;

elemento = document;
elemento = document.all;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.links[3].classList;

// console.log(elemento);

const formulario = document.getElementsByClassName('formulario');

const link =  document.getElementsByClassName('tweet');

const noExiste = document.getElementsByClassName('no-existe');

const myForm = document.getElementById('myform');

//Te retorna el primero que encuentra
const input = document.querySelector('.myinput');
//Te retorna todos los elementos en un array
const input2 = document.querySelectorAll('.myinput');

console.log(input2);

//Podemos tener selectores especificos como CSS
const entrandoForm = document.querySelector('.formulario .myinput');

const tercerInput = document.querySelector('.formulario .myinput:nth-child(3)');



// console.log(tercerInput);
// console.log(entrandoForm);
// console.log(input);


// console.log(formulario);
// console.log(link);
// console.log(noExiste);
// console.log(myForm)