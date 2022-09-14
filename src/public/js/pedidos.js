//Variables locales!
const api = new ApiRest();
const ID = document.getElementById("id");
const mensaje = document.getElementById("Mensaje");
const pedidos = document.getElementById('Pedidos');
const tablaPedidos = document.getElementById('tabla-Pedidos');
const container = document.getElementById('Pedidos');

document.addEventListener("DOMContentLoaded", async () => {
    const pedidosDB = await api.getPedido(ID.value);

    if (pedidosDB[0].ID_Pedido === null) {
        mensaje.innerHTML = `
            <div>
                <div>
                    <p class="h2 text-center">¡Por el momento, usted no tiene pedidos pendientes!</p>
                    <p class="h4 text-center">¡No espere más y comience sus compras ahora mismo!</p>
                </div>
                <div class="alinea-centro w-100">
                    <!-- Quería hacer algo simple, pero llamativo y encantador. Y entonces puse un gato con cajas a un lado. -->
                    <img id="logo-caja" src="image/utils/logo-pestaña.png" width="80px">
                    <img id="gato-caja" src="image/utils/gato_repartidor.png" width="380px">
                </div>
                <h4 class="text-center"><a href="/Productos">¡Comenzar a comprar!</a></h4>
            </div>
        `;
        tablaPedidos.hidden = true;
    } else {
        console.log(pedidosDB);
        let entrega = '';
        let temple = '';
        pedidosDB.forEach(e => {
            entrega = e.Entregado ? 'Ya se entrego':'No se a entragado!';
            temple +=`
                <tr>
                    <th scope="col">${e.ID_Pedido}</th>
                    <th scope="col">${new Date(e.Fecha_Realizado).toUTCString()}</th>
                    <th scope="col">${new Date(e.Fecha_Entrega).toUTCString()}</th>
                    <th scope="col">${e.Calle} #${e.No_Externo} ${e.Fraccionamiento}  C.P. ${e.Codigo_Postal}</th>
                    <th scope="col">${entrega}</th>
                    <th scope="col">${e.Total_Pagar}</th>
                </tr>
            `;
        });

        container.innerHTML = temple;
    }
});

//Comienzo de Compras
mensaje.addEventListener("click", e => {
    if (e.target.classList.contains("btn")) {
        window.location.href = "/Productos";
    }
});
