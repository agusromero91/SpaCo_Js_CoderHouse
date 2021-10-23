let listaCarrito;
let mostrarCarrito = document.getElementById("carritoCard")
let btn = document.getElementById("finalizarCompra")

if (localStorage.getItem("carrito") == null) {
    console.log("Carrito Vacio")
} else {
    listaCarrito = JSON.parse(localStorage.getItem("carrito"))
}

listaCarrito.forEach(element => {
    mostrarCarrito.innerHTML += `
    <div class="card col-4" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${element.descripcion}</h5>
        <p class="card-text">${element.precio}</p>
    </div>
    </div>
    `
});



const finalizarCompra = () => {

    let total = 0

    listaObjetos.forEach(element => {
        total += element.precio
    })

    console.log("Felicitaciones, tu compra fue aprobada, gastaste " + total);
    localStorage.removeItem("carrito")
}

btn.addEventListener("click", () => {
    finalizarCompra()
})