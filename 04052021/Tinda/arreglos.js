function agregar_producto(){

    let product = document.getElementById("producto");
    let price =  document.getElementById("precio");
    let amount = document.getElementById("cantidad");
    
    let datos = document.getElementById("tabla_productos");

    let subtotal = Number(price.value) * Number(cantidad.value);

    datos.innerHTML = datos.innerHTML +  "<tr>" +
                                            "<td>"+product.value+"</td>"+
                                            "<td>$"+price.value+"</td>"+
                                            "<td>"+amount.value+"</td>"+
                                            "<td name='subtotal'>"+subtotal+"</td>"+
                                          "</tr>";
    calcular_total();
}


function calcular_total(){

  let subtotales = document.getElementsByName('subtotal');
  let total = document.getElementById('total');

  let suma = 0;

  for(let i=0;i < subtotales.length;i++){
      suma =  suma + Number(subtotales[i].innerText);
  }

  total.innerText = "$"+suma;
}































// let productos = [];

// let categoria = ['Microsoft','Sony'];

// let categoriaProducto = productos.concat(categoria);
// document.write(categoriaProducto);
// productos.pop();
// productos.shift();
// productos.sort();
// productos.reverse();
// let copiaProductos = productos.slice(1,3);
// document.write(copiaProductos);

// productos.unshift('Xbox Series X');
// document.write(productos);

// let nuevoProducto = productos.push('Xbox Series X');
// document.write(nuevoProducto+"<br>");
// document.write(productos);

// productos.push('Control','Audifonos','Silla Gamer');
// document.write(productos+"<br>");
// // doc    ument.write(productos.length);
 