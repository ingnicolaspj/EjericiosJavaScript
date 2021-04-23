// Me permite seleccionar todos los elementos que tengan una clase, selector o id
let animado = document.querySelectorAll(".animado");

//Se crea una función para detectar la cantidad de scroll que se hace para que aparezcan los elementos.
function mostrarScroll(){

    //Es la cantidad de scroll que voy haciendo a medida que se va bajando(detectando) y lo guardamos en una variable
    let scrollTop = document.documentElement.scrollTop;
    
    //Como son varios elementos lo realizamos con un for y length me permite contar cuantos elementos hay en una variable
    for(let i=0; i < animado.length; i++){
        
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }

    }

}

window.addEventListener('scroll', mostrarScroll);