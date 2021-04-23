function calcularPrecio(){
    let nombre = document.getElementById("name").value;
    let precio = document.getElementById("price").value;
    let cantidadProducto = document.getElementById("cantidad").value;

    let total = precio * cantidadProducto;
    
    document.write("El total de tu compra es:$"+total);
}