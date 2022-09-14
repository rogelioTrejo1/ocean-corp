//Variables globales
const api = new ApiRest();
const componet = new Componete();
var banderaMessage = false;

//CArga de todos los productos de la base de datos
document.addEventListener('DOMContentLoaded', async () => {
    //Carga de productos y Conteo
    const resultProductos = await api.getProductos();
    generarProducto(resultProductos);
    numeroProductos(resultProductos);

    //Cargar categorias de busqueda de productos
    const resultCategorias = await api.getCategorias();
    const containerCategorias = document.getElementById('categoria');
    let templeCategorias = "";

    templeCategorias += `
        <option value="todos">-- Todos las categorías --</option>
    `;
    resultCategorias.forEach(element => {
        templeCategorias += `
            <option value="${element.Categoria}">${element.Categoria}</option>
        `;
    });

    containerCategorias.innerHTML = templeCategorias;
});

//Busqueda por Nombre
document.getElementById('Buscar-Nom')
    .addEventListener('keyup', async () => {
        const valorBuscar = document.getElementById('Buscar-Nom').value;
        if (valorBuscar.length > 0) {

            const resultByNombre = await api.getProductoByNombre(valorBuscar);

            if (resultByNombre.Resp === 'Contenido no Existente') {
                const productosTotales = await api.getProductos();
                generarProducto(productosTotales);
                numeroProductos(productosTotales);

                generateMessage('danger', 'El producto que busca no se puede escontrar....');
            } else {
                const productosByNombre = await api.getProductoByNombre(valorBuscar);
                generarProducto(productosByNombre);
                numeroProductos(productosByNombre);
            }
        } else {
            const totalProductos = await api.getProductos();
            generarProducto(totalProductos);
            numeroProductos(totalProductos);
        }
    });

//Busqueda por Categoria
document.getElementById('categoria')
    .addEventListener('click', async () => {
        const categorias = document.getElementById('categoria');
        if (categorias.value === "todos") {
            const productosTotales = await api.getProductos();
            generarProducto(productosTotales);
            numeroProductos(productosTotales);
        } else {
            const productosByCategoria = await api.getProductoByCategoria(categorias.value);
            generarProducto(productosByCategoria);
            numeroProductos(productosByCategoria);
        }
    });

//Orden de los productos
document.getElementById('ordenar')
    .addEventListener('click',async (e)=>{
        const orden = document.getElementById('ordenar');
        const orderByProductos = await api.getOrderByProductos(orden.value);
        generarProducto(orderByProductos);
        numeroProductos(orderByProductos);
    });

//Seleccion de Producto y visualizacion!
document.getElementById('Productos')
    .addEventListener('click', e => {
        if (e.target.classList.contains('vista')) {    
            const _id = e.target.getAttribute('_id');
            window.location.href = `/Productos/${_id}`;
        }
    });


//funcion de generado de productos
function generarProducto(results) {
    const productos = document.getElementById('Productos');
    let producto = "";

    results.forEach(element => {
        producto += `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="vista producto" _id="${element.ID_Producto}">
                    <div class="vista img-producto" _id="${element.ID_Producto}">
                        <img class="vista" src="${element.Imagen}" _id="${element.ID_Producto}">
                    </div>
                    <div class="vista dts-producto" _id="${element.ID_Producto}">
                        <small class="vista" _id="${element.ID_Producto}">${element.Categoria}</small>
                        <p class="vista" _id="${element.ID_Producto}">${element.Producto}</p>
                        <span class="vista" _id="${element.ID_Producto}">$ ${element.Precio}</span>
                    </div>
                </div>
            </div>
        `;
    });
    productos.innerHTML = producto;
}

function numeroProductos(results){
    const Num_Products = document.getElementById('Num-Products');
    const resultNum = results.length;
    Num_Products.innerHTML = `
        <p class="text-center text-black-50 h5 p-2">${resultNum} articulo(s)</p> 
    `;
}

//Pintar mensaje en pantalla!!!
function generateMessage(color,messages){
    if (!banderaMessage) {
        const containerMessage = document.getElementById('mensaje');
        const messge = componet.alert(color,messages);
        containerMessage.appendChild(messge);
        banderaMessage = true;
        setTimeout(() => {
            document.querySelector('.message').remove();
            banderaMessage = false;
        }, 3000);

    }
}

// Botón flotante para regresar al tope
document.getElementById("btn-tope").addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
  
  // Calcula la altura del documento
  function getAlturaDocu() {
    var D = document;
    return Math.max(
      D.body.scrollHeight,
      D.documentElement.scrollHeight,
      D.body.offsetHeight,
      D.documentElement.offsetHeight,
      D.body.clientHeight,
      D.documentElement.clientHeight
    );
  }
  
  // Hace aparecer y desaparecer el botón flotante según el porcentaje de scroll desplazado
  window.onscroll = function() {
    var posicion = window.pageYOffset,
      alturaVentana = window.innerHeight,
      alturaDocu = getAlturaDocu(),
      scroleado = alturaDocu - alturaVentana,
      porcentaje = Math.floor((posicion / scroleado) * 100);
  
    if (porcentaje >= 10) {
      document.getElementById("btn-tope").classList.remove("d-none");
      document.getElementById("btn-tope").className += " ani-btn-tope";
    } else {
      document.getElementById("btn-tope").className ="btn-tope alinea-centro d-none";
    }
  };
  