//Obtengo la clase container y la clase card
const container =  document.querySelectorAll(".container .card");

container.forEach(el => {
    el.addEventListener("mouseover", (e)=>{
        let xAxis = (window.innerWidth/2-e.pageX)/15;
        let yAxis = (window.innerHeight/2-e.pageY)/15;
        el.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    })
});

container.forEach(el => {
     el.addEventListener("mouseenter", (e)=>{
        el.style.transition = `all 0.5s ease`;
        el.style.animation = `animacion 1.5s forwards`;
        el.querySelector(".title").style.transform = "traslateZ(150px)";
    })
});

container.forEach(el => {
     el.addEventListener("mouseleave", (e)=>{
        el.style.transition=`all 1.5s ease`;
        el.style.animation =`none`;
        el.style.transform=`rotateY(0deg) rotateX(0deg)`;
        el.querySelector(".title").style.transform="traslateZ(0px)";
    })
});