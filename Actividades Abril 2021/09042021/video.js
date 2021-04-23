$(window).scroll(function(){
    //Calcular el scroll que hace el usuario
    let pixel = $(window).scrollTop();
    //Mostrar por consola ese scroll
    console.log({pixel});

    //Asociar el scroll que hace el usuario con el tiempo actual del video
    macpro.currentTime = pixel / 1000;
});