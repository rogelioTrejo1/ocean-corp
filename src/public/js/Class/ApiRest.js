class ApiRest{
    constructor(){
        this.url="/api";
    }

    //Peticiones GET
    async getClientes(){
        const resp = await fetch(`${this.url}/clientes`);
        const clientes = await resp.json();
        return clientes;
    }

    async getCliente(id){
        const resp = await fetch(`${this.url}/clientes/${id}`);
        const cliente = await resp.json();
        return cliente;
    }

    async getProductos(){
        const resp = await fetch(`${this.url}/productos`);
        const productos = await resp.json();
        return productos;
    }

    async getProducto(id){
        const resp = await fetch(`${this.url}/productos/${id}`);
        const producto = await resp.json();
        return producto;
    }

    async getPedido(id){
        const resp = await fetch(`${this.url}/pedidos/${id}`);
        const pedidos = await resp.json();
        return pedidos;
    }

    async getCategorias(){
        const resp = await fetch(`${this.url}/productosCategoria`);
        const categorias = await resp.json();
        return categorias; 
    }

    async getProductoByNombre(buscarByNombre){
        const resp = await fetch(`${this.url}/productoByNombre/${buscarByNombre}`);
        const productos = await resp.json();
        return productos;
    }

    async getProductoByCategoria(buscarByCategoria){
        const resp = await fetch(`${this.url}/productoByCategoria/${buscarByCategoria}`);
        const productos = await resp.json();
        return productos;
    }

    async getOrderByProductos(orden){
        const resp = await fetch(`${this.url}/productosByOrder/${orden}`);
        const productosOrden = await resp.json();
        return productosOrden;
    }

    async getNumProductos(){
        const resp = await fetch(`${this.url}/NumProductos`);
        const numProductos = await resp.json();
        return numProductos;
    }

    async getDatosCliente(ID_Cliente){
        const resp = await fetch(`${this.url}/datosClientes/${ID_Cliente}`);
        const datosCliente = await resp.json();
        return datosCliente    
    }

    async getProductosFavoritos(ID_Cliente){
        const resp = await fetch(`${this.url}/productosFavoritos/${ID_Cliente}`);
        const productosFavoritos = await resp.json();
        return productosFavoritos;
    }

    async getPedidoProducto(ID_Pedido){
        const resp = await fetch(`${this.url}/pedidosProductos/${ID_Pedido}`);
        const pedidoProductos = await resp.json();
        return pedidoProductos;
    }

    //Peticiones POST
    async postDatosCliente(persona){
        const resp = await fetch(`${this.url}/datosClientes`,{
            headers:{
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(persona)
        });
        const datoCliente = await resp.json();
        return datoCliente;
    }

    async postPedido(idCliente){
        const resp = await fetch(`${this.url}/pedido`,{
            headers:{
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(idCliente)
        });
        const pedido = await resp.json();
        return pedido;
    }

    async postPedidosProductos(pedidosProductos){
        const resp = await fetch(`${this.url}/pedidos/cantidad`,{
            headers:{
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(pedidosProductos)
        });
        const datos = await resp.json();
        return datos;
    }

    async postProductoFavorito(productoFavorito){
        const resp = await fetch(`${this.url}/productoFavorito`,{
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(productoFavorito)
        });
        const dato = await resp.json();
        return dato;
    }

    async postImprecion(datosImprecion){
        const resp = await fetch(`${this.url}/imprecion`,{
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(datosImprecion)
        });
        const dato = await resp.json();
        return dato;
    }

    //Peticiones PUT
    async putTotalPagar(objeto){
        const resp = await fetch(`${this.url}/pedidoTotal`,{
            headers:{
                'Content-type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(objeto)
        });
        const datos = await resp.json();
        return datos;
    }
    
    async putEntrega(id_Pedido){
        const resp = await fetch(`${this.url}/entrega`,{
            headers:{
                'Content-type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(id_Pedido)
        });
        const datos = await resp.json();
        return datos;
    }

    async putCliente(Cliente){
        const resp = await fetch(`${this.url}/actualizarCliente`,{
            headers:{
                'Content-type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(Cliente)
        });
        const cliente = await resp.json();
        return cliente;
    }

    async putFotoPerfil(id_Cliente){
        const resp = await fetch(`${this.url}/fotoPerfil/${id_Cliente}`,{
            headers:{
                'Content-type': 'application/json'
            },
            method: 'PUT',
        });
        const datos = await resp.json();
        return datos;
    }

    async putDatosClientes(datosCliente){
        const resp = await fetch(`${this.url}/actualizarDatos`,{
            headers:{
                'Content-type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(datosCliente)
        });
        const datos = await resp.json();
        return datos;

    }

    //Peticiones DELETE
    async deleteCliente(idCliente){
        const resp = await fetch(`${this.url}/cliente/${idCliente}`,{
            headers:{
                'Content-type': 'application/json'
            },
            method: 'DELETE'
        });
        const dato = await resp.json();
        return dato;
    }

    async deletePedido(idPedido){
        const resp = await fetch(`${this.url}/pedido/${idPedido}`,{
            headers:{
                'Content-type': 'application/json'
            },
            method: 'DELETE'
        });
        const dato = await resp.json();
        return dato;
    }

    async deleteProductoFavorito(idFavorito){
        const resp = await fetch(`${this.url}/productoFavorito/${idFavorito}`,{
            headers: {
                'Content-type': 'application/json'
            },
            method: 'DELETE'
        });
        const dato = await resp.json();
        return dato;
    }

    async deletePedidoProducto(idPedidoProducto){
        const resp = await fetch(`${this.url}/pedidoProducto/${idPedidoProducto}`,{
            headers:{
                'Content-type': 'application/json'
            },
            method: 'DELETE'
        });
        const dato = await resp.json();
        return dato;
    }
}