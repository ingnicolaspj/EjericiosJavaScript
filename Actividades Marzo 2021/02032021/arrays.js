/* let caja = ["Memoria USB","Disco Duro","Cargador de pilas","Laptop"];

document.write(caja[8]); */

//Arrays asociativos son parecidos a los llamdos json intercambios de información

let user1 = {
    id:"123",
    nombre : "Carlos",
    apellidos : "Chavero Cruz",
    edad : 46,
    sexo : "Masculino"
};



document.write(user1)

let nombre = user1["nombre"];
let apellidos = user1["apellidos"];
let edad = user1["edad"];
let sexo = user1["sexo"];

let descripcion = `El nombre del usuario1 es: <b>${nombre}</b><br>
Sus apellidos del usario son: <b>${apellidos}</b><br>El usuario tiene una edad de: <b>${edad} años</b><br>El sexo del usario es: <b>${sexo}</b>.`;

document.write(descripcion);
