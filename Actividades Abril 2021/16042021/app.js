//Funcion que captura datos desde un cuadro de texto de un formlulario

function capturaDatos(){
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("pass").value;

    if(correo == ""){
        alert("El correo es obligatorio");
        document.getElementById("correo").focus();
    }else{
        if(password == ""){
           alert("La contraseña es obligatoria es obligatorio");
           document.getElementById("pass").focus();
        }
    }
    

    alert(correo+password);
}
