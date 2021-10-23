let listaCarrito;
let imprimirCarrito = document.getElementById("carritoCard")
let btn = document.getElementById("finalizarCompra")

if (localStorage.getItem("carrito") == null) {
    console.log("Carrito Vacio")
} else {
    listaCarrito = JSON.parse(localStorage.getItem("carrito"))
    console.log(listaCarrito)
}

//mostrar Carrito
listaCarrito.forEach(element => {
    let index = listaCarrito.indexOf(element);
    imprimirCarrito.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${element.descripcion}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${element.categoria}</h6>
      <p class="card-text">$ ${element.precio}</p>
      <button class="btn btn-primary" onclick="comprar(${index})">Comprar</button>
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
    localStorage.removeItem("carrito")
}

btn.addEventListener("click", () => {
    finalizarCompra()
})