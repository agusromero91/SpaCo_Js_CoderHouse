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

