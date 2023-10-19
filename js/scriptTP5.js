
let productos = ["Merengadas", "Mellizas", "Rumba", "Amor", "Manon", "Chocolinas", "Capitan del espacio", "Cachafaz", "Jorgito", "Guaimayen", "Lincoln", "Pepas", "Havana"];
let precios = [50, 45, 67, 45, 56, 34, 80, 67, 78, 23, 20, 91, 80];



let ticket = "";
let sigoComprando = true;
let sigo;
let subtotal= 0;

let divProductos = document.getElementById("productosId");

function armarListadoEnHtml() {

    html = document.createElement("ul");
    for (i = 0; i < productos.length; i++) {

    }

    divProductos.innerHTML = ""
}

let listado="Id   Producto  Valor      \n";
function armarListado(){
    for (var i = 0; i < productos.length; i++) {
    listado = listado + (i+1) + "  " + productos[i]+ "  " + precios[i] +" \n";
    }

}
armarListado();


do {
    //alert("Productos ofrecidos: \n" + listado);
    var producto = prompt("\n Subtotal: $" + subtotal+ " \n Elija el producto ingresando el id mostrado: \n" + listado + " \n Elija el producto ingresando el id mostrado: ");
    var cantidad = prompt(" \n Ingrese la cantidad: \n" + listado + " \n Ingrese la cantidad: ");
    if (Number(producto) != NaN && producto > 0 && producto <= productos.length
         && Number(cantidad) != NaN  ){
            subtotal = subtotal +  (precios[producto -1] * parseInt(cantidad))  ;
            ticket = ticket + " \n " + cantidad + "        "  + productos[producto -1] + "       $"+ precios[producto-1]  + "     $"+ (precios[producto -1] * parseInt(cantidad)) ; 
    }else{
        alert("El id del producto y/o la cantidad fueron mal ingresados ")
    }
    sigo = prompt("Subtotal: $"+subtotal+ "\n Desea seguir comprando?: si-1 , No-2");
    if (sigo != 1) {
        sigoComprando = false;
    }

} while (sigoComprando)


alert("El ticket de compra es: \n" +
      " Cant  Producto Precio Unitario  Precio\n" + 
       ticket + "\n El total a pagar es: $" + subtotal) ;