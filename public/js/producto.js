//Variables Globales
const api = new ApiRest();
const componet = new Componete();
const alertMessges = document.getElementById("Messages");
const idProducto = document.getElementById("id-Producto");
const idCliente = document.getElementById("id");
const carrito = document.getElementById("tarjeta-carrito");
var banderaMenssage = false;

//boton de añadir al carrito!
document.querySelector("#detalles-producto")
    .addEventListener("click", async e => {
        if (e.target.classList.contains("btn-ocean-amarillo")) {
            const cantiadProducto = document.getElementById("Cantidad");

            if (cantiadProducto.value > 0) {
                const idPedido = document.getElementById("id-Pedido");
                const statusProducto = {
                    ID_Pedido: idPedido.value,
                    ID_Producto: idProducto.value,
                    Cantidad: cantiadProducto.value
                };
                const respProducto = await api.postPedidosProductos(statusProducto);
                if (respProducto.text === "Insertado") {
                    window.location.href = "/Productos";
                }
            } else {
                messageAlert(
                    "warning",
                    "Favor de poner una cantidad de poductos que desea!",
                    3000
                );
            }
        }
    });

//Compartir Producto
document.getElementById("icono-compartir")
    .addEventListener("click", () => {
        var c = document.getElementById('compartir');
        if (c.className === 'compartir') {
            c.className += ' on';
            c.style.animation = "ani-share 0.3s";
        } else {
            c.className = 'compartir';
        }
    });

// Animacion de botón favoritos
var favo = document.getElementById("favoritos");

favo.addEventListener("click", () => {
    if (favo.style === "animation: ani-favorito 0.8s; color: var(--rosa);") {
        favo.style = "";
        favo.style.color = "pink";
    } else {
        favo.style = "animation: ani-favorito 0.8s; color: var(--rosa);";
    }
});

document.getElementById("favoritos").addEventListener("click", async () => {
    const formDate = new FormData();

    formDate.append("ID_Producto", idProducto.value);
    formDate.append("ID_Cliente", id.value);
    const productoFavo = await api.postProductoFavorito({
        ID_Producto: formDate.get("ID_Producto"),
        ID_Cliente: formDate.get("ID_Cliente")
    });

    if (productoFavo.Resp) {
        messageAlert("success", "El Producto se añadio a favoritos!!!", 3000);
    } else {
        messageAlert("warning", "El Producto ya se añadio a favoritos", 3000);
    }
});

//Funciones

/* Mensaje Alerta */
function messageAlert(color, mensaje, time) {
    if (!banderaMenssage) {
        banderaMenssage = true;
        const alert = componet.alert(color, mensaje);
        alertMessges.appendChild(alert);
        setTimeout(() => {
            document.querySelector(".message").remove();
            banderaMenssage = false;
        }, time);
    }
}
