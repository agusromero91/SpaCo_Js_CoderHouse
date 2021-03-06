let listaCarrito;
let imprimirCarrito = document.getElementById("carritoCard")
let btn = document.getElementById("finalizarCompra")
let imprimirTotal = document.getElementById("total")

if (localStorage.getItem("carrito") == null) {
    console.log("Carrito Vacio")
} else {
    listaCarrito = JSON.parse(localStorage.getItem("carrito"))
    console.log(listaCarrito)
}

//mostrar Carrito
listaCarrito.forEach(element => {
    imprimirCarrito.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${element.descripcion}</h5>
      <p class="card-text">$ ${element.precio}</p>
    </div>
  </div>
`
})



const finalizarCompra = () => {

    let total = 0

    listaCarrito.forEach(element => {
        total += element.precio
    })

    console.log("Felicitaciones, tu compra fue aprobada, gastaste " + total);
    localStorage.removeItem("carrito");

    imprimirTotal.innerHTML += `
    <div class="card-body">
      <p class="card-text">$ ${total}</p>
    </div>
  </div>
`


}

btn.addEventListener("click", () => {
    finalizarCompra()
})