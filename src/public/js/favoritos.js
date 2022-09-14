//Variables globales
const api = new ApiRest();
const component = new Componete();
const id = document.getElementById('id');
const container = document.getElementById('Favoritos');
const mensajeNoFavo = document.getElementById('Mensaje-No-Favorito');
var banderaMensaje = false;

document.addEventListener('DOMContentLoaded', async () => {
    const productosFavoritos = await api.getProductosFavoritos(id.value);

    if (productosFavoritos.length > 0) {
        let temple = "";

        productosFavoritos.forEach(e => {
            temple += `
                <article class="row favorito">
                    <div class="col-12 col-lg-2 alinea-centro">
                        <div class="img-fav">
                            <img src="${e.Imagen}" class="img-fluid">
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 fav-desc">
                        <h6>${e.Producto}</h6>
                        <i>${e.Descriptcion}</i>
                        <p>${timeago.format(e.Fecha_Insert)}</p>
                        <p>
                            <button _id="${e.ID_Producto}" class="btn btn-primary vista" type="button"> Detalles </button>
                        </p>
                        <b class="azu">Disponibilidad</b>
                    </div>
                    <div class="col-12 col-lg-3 p-absolute">
                        <div class="center-y fav-ana-carri">
                            <h5>$ ${e.Precio}</h5>
                            <div class="form-row">
                                <div class="col-6 col-lg-3 valor">
                                    <input class="form-control" type="number" placeholder="0">
                                </div>
                                <div class="col-6 col-lg-9">
                                    <button class="btn-ocean-amarillo" _id="${e.ID_Product_Favorito}" _idProduc="${e.ID_Producto}">
                                        Añadir al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-1 alinea-centro">
                        <button class="btn-ocean-ligero btn-redondo" _id="${e.ID_Product_Favorito}">
                            &times;
                        </button>
                    </div>
                </article>
            `;

        });
        container.innerHTML = temple;
        mensajeNoFavo.hidden = true;
    } else {
        mensajeNoFavo.hidden = false;
    }

});

document.getElementById('Favoritos')
    .addEventListener('click',async (e) => {
        //Añadir al carrito!
        if (e.target.classList.contains('btn-ocean-amarillo')){
            const id = e.target.getAttribute('_id');
            const idProducto = e.target.getAttribute('_idProduc');
            const productoSeleccionado = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
            const numeroProductos = e.path[2].childNodes[1].childNodes[1];

            if (numeroProductos.value > 0) {
                if (document.getElementById('id-pedido')){
                    const idPedido = document.getElementById('id-pedido');
                    const statusProducto = {
                        ID_Pedido: idPedido.value,
                        ID_Producto: idProducto,
                        Cantidad: numeroProductos.value
                    };

                    await api.postPedidosProductos(statusProducto);
                    mensajeAlert('success', 'Producto añadido!', 3000, productoSeleccionado);    
                } else{
                    mensajeAlert('danger', 'No tienes un pedido en el cual se pueda añadir el producto!!!', 4000, productoSeleccionado);    
                }
            } else {
                mensajeAlert('danger', 'Inserte un numero de productos que dece', 5000,productoSeleccionado);
            }
        }
        //Eliminar de favoritos
        if (e.target.classList.contains('btn-ocean-ligero')) {
            const id =  e.target.getAttribute('_id');
            const deleteProductoFavorito = await api.deleteProductoFavorito(id);

            if(deleteProductoFavorito.Text === 'Eliminado'){
                e.path[2].remove();//Remueve el articulo seleccionado

                if (e.path[3].children.length === 0) {
                    mensajeNoFavo.hidden = false;
                }
            }
            
            
        }
    });

document.getElementById('Favoritos')
    .addEventListener('click',e =>{
        if (e.target.classList.contains('vista')){
            const id = e.target.getAttribute('_id');
            window.location.href = `/Productos/${id}`;
        }
    });

//Funciones 
/* Mensaje de no producto! */
function mensajeAlert(color,mensaje,time,containerProduc) {
    if (!banderaMensaje) {
        const alert = component.alert(color, mensaje);
        alert.classList.add('w-50', 'mx-auto');
        document.querySelector('#Favoritos')
            .insertBefore(alert,containerProduc);
        banderaMensaje = true;    
        setTimeout(() => {
            document.querySelector('.message').remove();
            banderaMensaje = false;
        }, time);

    }
}