/* -------------- Productos ------------ */
//Clase Producto
class Product {
    constructor (sku, categoria, descripcion, precio, stock){
        this.sku = sku; 
        this.categoria = categoria; 
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock; 
        //this.imagen = imagen;
    }
}

let listaProductos = [];

//productos en lista existente
listaProductos.push (new Product ("1000", "Esmalte", "Esmalte Opi Shine: rojo", 900, 10));
listaProductos.push (new Product ("1001", "Accesorios", "Marcadores correctores", 650, 20));
listaProductos.push (new Product ("1002", "Accesorios", "Lima", 200, 50));
listaProductos.push (new Product ("1003", "Accesorios", "Quitaesmalte", 650, 15));
listaProductos.push (new Product ("1004", "Combos", "Combo esmalte Opi", 6500, 5));
listaProductos.push (new Product ("1005", "Combos", "Combo mix basico", 880, 25));

//guardo datos
localStorage.setItem("lista", JSON.stringify(listaProductos));

//Mostrar Productos
let listaObjetos;
let imprimirProductos = document.getElementById("productoCard");

if (localStorage.getItem("lista") == null) {
    console.log("No tenes productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}


listaObjetos.forEach(element => {
    let index = listaObjetos.indexOf(element);
    imprimirProductos.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${element.descripcion}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${element.categoria}</h6>
      <p class="card-text">$ ${element.precio}</p>
      <button class="compra btn btn-primary" onclick="comprar(${index})">Comprar</button>
    </div>
  </div>
`
})

const comprar = (index) => {

    let carrito;
    if (localStorage.getItem("carrito") == null) {
        carrito = [];
    } else {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }

    carrito.push(listaObjetos[index])
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


//Eventos 
document.getElementById("productoCard").addEventListener("click", () => {
    comprar();
})














/* -------------- FORMA DE PAGO ------------ */
//Suma del total + calculo de cuotas
//Calculo de costo total segun cantidad de pedidos solicitados
/*
let cant1 = document.getElementById("cantManos");
let cant2 = document.getElementById("CantPies");
let cant3 = document.getElementById("cantMasaje");
let total;

let solicitarServicio = (cant1,cant2,cant3) => {
    if(cant1 > listaServicios[1].stock){
        console.log("No se puede realizar la compra");
        
    }else{
        listaServicios[1].stock = listaServicios[1].stock - cant1;
    }

    if(cant2 > listaServicios[2].stock){
        console.log("No se puede realizar la compra");
         
    }else{
        listaServicios[2].stock = listaServicios[2].stock - cant2;
    }

    if(cant3 > listaServicios[0].stock){
        console.log("No se puede realizar la compra");
        
    }else{
        listaServicios[0].stock = listaServicios[0].stock - cant3;
    }

    costoTotal(cant1,cant2,cant3)
}

//Evento para enviar la info de las cantidad de cada servicio
formularioPago.addEventListener('submit', (e) => {
    e.preventDefault();
    solicitarServicio(cant1.value,cant2.value,cant3.value);
    
  })


//Función para el costo total 
function costoTotal(a, b, c){
    total = listaServicios[1].precio*a + listaServicios[2].precio*b + listaServicios[0].precio*c;
    mostrarResultado(total);

    return total; 
}

function mostrarResultado(z){
    console.log("El costo total de tu compra es: $" + z);
    //alert(`El costo total de tu compra es: $ ${z}`);;
}
*/
