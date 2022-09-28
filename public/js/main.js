//variables Globales
const apiRest = new ApiRest();
if (document.getElementById("id")){
  const id = document.getElementById("id");
}
var tarjetaLogin = document.getElementById("tarjeta-perfil");
var c = document.getElementById("carrito");
var i = document.getElementById("tarjeta-carrito");
var totalPagar = 0;
var containerArticulos, total;
if (document.getElementById("Articulo")) {
  containerArticulos = document.getElementById("Articulo");
  total = document.getElementById("total-Pagar");
}

//Targeta de perfil
document.getElementById("perfil").addEventListener("click", () => {
  if (tarjetaLogin.className == "tarjeta-login on") {
    tarjetaLogin.className = "tarjeta-login";
  } else if (tarjetaLogin.className == "tarjeta-login") {
    tarjetaLogin.className += " on";
  }
});

// Hace que aparezca y desaparezca la tajerta al dar click en el carrito, y que desaparezca la tarjeta de carrito al cliquear fuera de la tarjeta
document.addEventListener("click", e => {
  if (e.target.classList.contains("carri")) {
    if (e.target.classList.contains("carrito")) {
      if (i.className == "tarjeta-carrito carri on") {
        i.className = "tarjeta-carrito carri";
      } else if (i.className == "tarjeta-carrito carri") {
        i.className += " on";
      }
    }
  } else {
    i.className = "tarjeta-carrito carri";
  }
});

//Cerrar Sesiónn!
document.getElementById("tarjeta-perfil").addEventListener("click", e => {
  if (e.target.classList.contains("btn-ocean-blanco")) {
    window.location.href = "/LogOut";
  }
});

//Quitar artículo
document
  .getElementById("tarjeta-carrito")
  .addEventListener("click", async e => {
    if (e.target.classList.contains("quitar")) {
      const id = e.target.getAttribute("_id");
      const precio = e.target.getAttribute("_precio");
      const cantidad = e.target.getAttribute("_cantidad");
      const articulo = e.target.parentElement.parentElement;
      const restar = precio * cantidad;
      totalPagar = totalPagar - restar;
      await apiRest.deletePedidoProducto(id);
      articulo.remove();
      total.innerText = `${totalPagar}`;
    }
  });

//Cargar artículos
document.getElementById("carrito").addEventListener("click", async e => {
  if (document.getElementById("idPedido")) {
    const idPedido = document.getElementById("idPedido");
    const pedidosProductos = await apiRest.getPedidoProducto(idPedido.value);

    if (pedidosProductos.length > 0) {
      let temple = "";

      pedidosProductos.forEach(e => {
        temple += `
                        <div class="articulo carri">
                            <div class="arti-img carri">
                                <img src="${e.Imagen}" class="img-fluid carri">
                            </div>
                            <div class="carri">
                                <p class="carri">${e.Producto}</p>
                                <i class="carri">X${e.Cantidad}</i>
                                <b class="carri">$${e.Precio}</b>
                                <button class="btn-ocean-ligero carri quitar" _id="${
                                  e.ID_Pedido_Producto
                                }" _cantidad="${e.Cantidad}" _precio="${
          e.Precio
        }">Quitar</button>
                            </div>
                        </div>
                    `;
        totalPagar += e.Cantidad * e.Precio;
      });

      containerArticulos.innerHTML = temple;
      total.innerText = `${totalPagar}`;
    } else {
      containerArticulos.innerHTML = `
      <h6 class="ros carri">No tienes productos en el carrito.</h6>
      <div class="alinea-centro carri mb-3">
          <img src="{{host}}/image/utils/namae.png" alt="" class="img-fluid carri">
      </div>
                `;
    }
  }
});

//Crear un pedido
document
  .getElementById("tarjeta-carrito")
  .addEventListener("click", async e => {
    if (e.target.classList.contains("pedido")) {
      const objet = { Id: id.value };
      await apiRest.postPedido(objet);
      window.location.href = "/Productos";
    }
  });

//Terminar pedido!
document
  .getElementById("tarjeta-carrito")
  .addEventListener("click", async e => {
    if (e.target.classList.contains("pagar")) {
      const idPedido = document.getElementById("idPedido");
      const total = document.getElementById("total-Pagar");
      const datosPedido = {
        ID: idPedido.value,
        total: total.innerText
      };
      await apiRest.putTotalPagar(datosPedido);
      window.location.href = "/Pedidos";
    }
  });

// Para sacar el coso del menú con la hamburguesa en dispositivos móviles
document.getElementById("anvurgesa").addEventListener("click", () => {
  var nav = document.getElementById("navbar");
  var perfil = document.getElementById("navPerfil");

  if (nav.style.display == "") {
    nav.style.display = "inline-flex";
    nav.className += " ani-anvurgesa";
    perfil.style.display = "inline-flex";
    perfil.className += " ani-anvurgesa";
  } else {
    nav.style.display = "";
    nav.classList.remove("ani-anvurgesa");
    perfil.style.display = "";
    perfil.classList.remove("ani-anvurgesa");
  }
});
