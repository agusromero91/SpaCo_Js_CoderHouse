/* -------------- Servicios ------------ */
//Carga de servicios desde la web

class Service {
    constructor (sku, descripcion, precio, stock){
        this.sku = sku; 
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock; 
    }
}

let listaServicios = [];

listaServicios.push (new Service("1000", "masaje corporal", 2000, 3));
listaServicios.push (new Service("1001", "belleza de manos", 790, 5));
listaServicios.push (new Service("1002", "belleza de pies", 820, 5));

//declaro variables
const sku = document.getElementById("sku");
const descripcion = document.getElementById("descripcion");
const precio = document.getElementById("precio");
const stock = document.getElementById("stock");

//Agregar servicio a la lista 
const agregarServicio = (servicio) => {

    const servicioP = document.createElement("div")

    const servicioSku = document.createElement("h4")
    servicioSku.textContent =servicio.sku
    servicioP.appendChild(servicioSku)

    const servicioDes = document.createElement("p")
    servicioDes.textContent =servicio.descripcion
    servicioP.appendChild(servicioDes)

    const servicioPrecio = document.createElement("p")
    servicioPrecio.textContent =servicio.precio
    servicioP.appendChild(servicioPrecio)

    const servicioStock = document.createElement("p")
    servicioStock.textContent =servicio.stock
    servicioP.appendChild(servicioStock)

    document.getElementById("servicioNuevo").appendChild(servicioP)

}   

//Evento para enviar la info de los nuevos servicios cargados en el formulario
formularioServicio.addEventListener('submit', (e) => {
    e.preventDefault()
    const servicio = new Service (sku.value, descripcion.value, precio.value, stock.value);
    listaServicios.push (servicio);
    console.log(listaServicios);
    formularioServicio.reset();
    agregarServicio(servicio);
    
  })

/* -------------- FORMA DE PAGO ------------ */
//Suma del total + calculo de cuotas
//Calculo de costo total segun cantidad de pedidos solicitados

let cant1 = document.getElementById("cantManos");
let cant2 = document.getElementById("CantPies");
let cant3 = document.getElementById("cantMasaje");
let total;

let solicitarServicio = (cant1,cant2,cant3) => {
    if(cant1 > listaServicios[1].stock){
        console.log("No se puede realizar la compra");
        alert("No se puede realizar la compra")
    }else{
        listaServicios[1].stock = listaServicios[1].stock - cant1;
    }

    if(cant2 > listaServicios[2].stock){
        console.log("No se puede realizar la compra");
        alert("No se puede realizar la compra") 
    }else{
        listaServicios[2].stock = listaServicios[2].stock - cant2;
    }

    if(cant3 > listaServicios[0].stock){
        console.log("No se puede realizar la compra");
        alert("No se puede realizar la compra")
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