let listaProductos;
let mostrarDatos = document.getElementById("productoCard")

if (localStorage.getItem("lista") == null) {
    console.log("No hay productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

listaProductos.forEach(element => {

    let index = listaProductos.indexOf(element)

    mostrarDatos.innerHTML += `
    <div class="card col-4" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${element.nombre}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${element.categoria}</h6>
        <p class="card-text">${element.precio}</p>
        <button class="card-link" onclick="comprar(${index})">Comprar</button>
    </div>
    </div>
    `
});



const comprar = (index) => {

    let carrito;
    if (localStorage.getItem("carrito") == null) {
        carrito = []
    } else {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }


    carrito.push(listaProductos[index])
    localStorage.setItem("carrito", JSON.stringify(carrito))
}