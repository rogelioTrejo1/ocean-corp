const router  = require('express').Router();
const {conn} = require('../scripts/conexiones');
const {getRandow} = require('../scripts/helperst');

//Peticiones GET
router.get('/clientes',async (req,res)=>{
    const sql='SELECT * FROM Clientes';
    conn.query(sql,(error,results)=>{
        if(error) throw error;
        res.json(results);
    });  
});

router.get('/clientes/:id',(req,res)=>{
    const ID = req.params.id;
    const sql = `SELECT * FROM Clientes WHERE ID_Cliente=${conn.escape(ID)}`;
    conn.query(sql,(error,results)=>{
        if(error) throw error;
        res.json(results);
    });
});

router.get('/datosClientes/:id',(req,res)=>{
    const id = req.params.id
    const sql = `SELECT * FROM Datos_Clientes WHERE ID_Cliente = ${conn.escape(id)}`;

    conn.query(sql,(error,result)=>{
        if(error) throw error;
        res.json(result);
    });
});

router.get('/productos',(req,res)=>{
    const sql=`SELECT * FROM Productos`;
    conn.query(sql,(error,results)=>{
        if(error) throw error;
        res.json(results);
    });
});

router.get('/productos/:id',(req,res)=>{
    const ID = req.params.id;
    const sql = `SELECT * FROM Productos WHERE ID_Producto=${conn.escape(ID)}`;
    conn.query(sql,(error,results)=>{
        if(error) throw error;
        res.json(results);
    });
});

router.get('/pedidos/:id',(req,res)=>{
    const ID = req.params.id;
    const sql =`SELECT P.ID_Pedido,P.Fecha_Realizado,P.Fecha_Entrega,D.Calle,D.No_Interno,D.No_Externo,D.Fraccionamiento,D.Codigo_Postal,P.Entregado,P.Total_Pagar 
                FROM Pedidos P INNER JOIN Pedidos_Productos PP INNER JOIN Datos_Clientes D
                ON P.ID_Pedido = PP.ID_Pedido AND P.ID_Cliente = D.ID_Cliente
                WHERE P.ID_Cliente = ${conn.escape(ID)} GROUP BY P.ID_Pedido`;
    conn.query(sql,(error,results)=>{
        if(error) throw results;
        res.json(results); 
    });
});

router.get('/productosCategoria',(req,res)=>{
    const sql = 'SELECT Categoria FROM Productos GROUP BY Categoria;';
    conn.query(sql,(error,results)=>{
        if(error) throw error;
        res.json(results);
    });
});

router.get('/productoByNombre/:text',(req,res)=>{
    const buscar = req.params.text;
    const sql = `SELECT * FROM Productos WHERE Producto LIKE '%${buscar}%';`;
    conn.query(sql,(error,result)=>{
        if(error) throw error;

        if(result.length > 0){
            res.json(result)
        } else {
            res.json({Resp: 'Contenido no Existente'});
        }
    });
});

router.get('/productoByCategoria/:text',(req,res)=>{
    const buscar = req.params.text;
    const sql = `SELECT * FROM Productos WHERE Categoria = ${conn.escape(buscar)};`;
    conn.query(sql,(error,result)=>{
        if(error) throw error;
        res.json(result);
    });
});

router.get('/productosByOrder/:orden',(req,res)=>{
    const { orden } = req.params;
    var sql = "";

    if(orden === "order1") sql += "SELECT * FROM Productos ORDER BY Producto ASC;";
    if(orden === "order2") sql += "SELECT * FROM Productos ORDER BY Producto DESC;";
    if(orden === "order3") sql += "SELECT * FROM Productos ORDER BY Precio ASC;";
    if(orden === "order4") sql += "SELECT * FROM Productos ORDER BY Precio DESC;";
    if(orden === "order5") sql += "SELECT * FROM Productos ORDER BY Categoria ASC;";
    if(orden === "order6") sql += "SELECT * FROM Productos ORDER BY Categoria DESC;";
    
    conn.query(sql,(error,results)=>{
        if(error) throw error;
        res.json(results);
    });
});

router.get('/productosFavoritos/:id',(req,res)=>{
    const id = req.params.id
    const sql =`SELECT PV.ID_Product_Favorito,P.ID_Producto,P.Producto,P.Descriptcion,P.Precio,P.Imagen,P.Disponibilidad,PV.Fecha_Insert 
                FROM Clientes C INNER JOIN Productos P INNER JOIN Productos_Favoritos PV 
                ON C.ID_Cliente = PV.ID_Cliente AND P.ID_Producto = PV.ID_Producto 
                WHERE C.ID_Cliente = ${conn.escape(id)}`;

    conn.query(sql,(error,result)=>{
        if(error) throw error;
        res.json(result);
    });
});

router.get('/pedidosProductos/:id',(req,res)=>{
    const idPedido = req.params.id;
    const sql = `SELECT PP.ID_Pedido_Producto,PR.Producto,PR.Precio,PR.Imagen,PP.Cantidad FROM Pedidos P INNER JOIN Pedidos_Productos PP INNER JOIN Productos PR ON P.ID_Pedido = PP.ID_Pedido AND PP.ID_Producto = PR.ID_Producto WHERE P.ID_Pedido = ${conn.escape(idPedido)}`;
    conn.query(sql,(error,result)=>{
        if(error) throw error;  
        res.json(result);
    });
});

//Peticiones POST (Insetcion de datos)
router.post('/datosClientes',(req,res)=>{
    const {ID_cliente,Calle,No_Interno,No_Externo,Fracci,Codigo_Postal,Telefono,Email,Ayuda} = req.body;
    const sql =`INSERT INTO Datos_Clientes(ID_Cliente,Calle,No_Interno,No_Externo,Fraccionamiento,Codigo_Postal,Telefono,Email,Ayuda) 
                VALUES(${conn.escape(ID_cliente)},${conn.escape(Calle)},${conn.escape(No_Interno)},${conn.escape(No_Externo)},${conn.escape(Fracci)},${conn.escape(Codigo_Postal)},${conn.escape(Telefono)},${conn.escape(Email)},${conn.escape(Ayuda)})`;
    conn.query(sql,error =>{
        if (error) throw error;
        res.json({text: "Insertado"});
    });
});

router.post('/pedido',(req,res)=>{   
    const {Id} = req.body;
    const sql =`INSERT INTO Pedidos(ID_Cliente,Fecha_Realizado,Fecha_Entrega) 
                VALUES(${conn.escape(Id)},CURDATE(),calcularEntrega(CURDATE(),${conn.escape(getRandow(1,5))}))`;
    conn.query(sql,(error,result) =>{
        if(error) throw error;
        req.app.locals.pedido = result.insertId;
        res.json({texto: "Inserdado"});
    });
});

router.post('/pedidos/cantidad',(req,res)=>{
    console.log(req.body);
    const {ID_Pedido,ID_Producto,Cantidad} = req.body;
    const sql =`INSERT INTO Pedidos_Productos(ID_Pedido,ID_Producto,Cantidad) 
                VALUES(${ID_Pedido},${ID_Producto},${Cantidad})`;
    conn.query(sql,error => {
        if(error) throw error;
        res.json({text: "Insertado"});
    });
});

router.post('/productoFavorito',(req,res)=>{
    const {ID_Producto,ID_Cliente} = req.body;
    const sql1 =`SELECT * FROM Productos_Favoritos 
                 WHERE ID_Producto = ${conn.escape(ID_Producto)} AND ID_Cliente = ${conn.escape(ID_Cliente)}`;

    conn.query(sql1,(error,result)=>{
        if(error) throw error;

        if(result.length > 0){
            res.json({ Resp: false });
        } else{
            const sql = `INSERT INTO Productos_Favoritos(ID_Producto,ID_Cliente) 
                VALUES(${conn.escape(ID_Producto)},${conn.escape(ID_Cliente)});`;

            conn.query(sql, error => {
                if (error) throw error;
                res.json({ Resp: true });
            });
        }
    });
});

router.post('/imprecion',(req,res)=>{
    const {ID_Cliente,NumCopias,ColorCopias,InterCopias,VistaCopias,PaginaCopias,TamañoCopias,PapelCopias,Documento} = req.body;
    const sql1 =`INSERT INTO Pedidos_Imprecion(ID_Cliente,Numero_Copias,Color_Copias,Interlvalos_Copias,Vista_Copias,Pagina_Copia,Tamaño_Copias,Papel_Copias,Documento) 
                 VALUES(${conn.escape(ID_Cliente)},${conn.escape(NumCopias)},${conn.escape(ColorCopias)},${conn.escape(InterCopias)},${conn.escape(VistaCopias)},${conn.escape(PaginaCopias)},${conn.escape(TamañoCopias)},${conn.escape(PapelCopias)},${conn.escape(Documento)});`;
    const sql = `INSERT INTO Pedidos_Imprecion(ID_Cliente,Numero_Copias,Color_Copias,Vista_Copias,Pagina_Copia,Tamaño_Copias,Papel_Copias,Documento) 
                 VALUES(${conn.escape(ID_Cliente)},${conn.escape(NumCopias)},${conn.escape(ColorCopias)},${conn.escape(VistaCopias)},${conn.escape(PaginaCopias)},${conn.escape(TamañoCopias)},${conn.escape(PapelCopias)},${conn.escape(Documento)});`

    if(InterCopias.length > 0){
        conn.query(sql1,error =>{
            if(error) throw error;
            res.json({Text: 'Insertado!'});
        });
    } else{
        conn.query(sql, error => {
            if (error) throw error;
            res.json({ Text: 'Insertado!' });
        });
    }
});

//Peticiones PUT (Actualizacion de datos)
router.put('/pedidoTotal',(req,res)=>{
    const {ID,total} = req.body;
    const sql =`UPDATE Pedidos SET Total_Pagar = ${conn.escape(total)} WHERE ID_Pedido=${conn.escape(ID)}`;
    conn.query(sql,error =>{
        if(error) throw error;
        delete req.app.locals.pedido;
        res.json({text: "Insertado"});
    });            
});

router.put('/entrega',(req,res)=>{
    const {ID} = req.body;
    const sql =`UPDATE Pedidos SET Entregado=true WHERE ID_Pedido=${ID};`;
    conn.query(sql,error =>{
        if(error) throw error;
        res.json({Text: "Actualizado"}); 
    });
});

router.put('/Perfil',(req,res)=>{
    const {id,image} = req.body;
    const sql = `UPDATE Clientes SET Foto_Perfil = ${conn.escape(image)} WHERE ID_Cliente = ${id};`;

    conn.query(sql, error => {
        if (error) throw error;
        res.json({ Text: 'Insertado!' });
    });
});

router.put('/actualizarDatos',(req,res)=>{
    const {ID_cliente,Calle,No_Interno,No_Externo,Fracci,Codigo_Postal,Telefono,Email,Ayuda} = req.body;
    const sql =`UPDATE Datos_Clientes 
                SET Calle = ${conn.escape(Calle)},No_Interno = ${conn.escape(No_Interno)},No_Externo = ${conn.escape(No_Externo)},Fraccionamiento = ${conn.escape(Fracci)},Codigo_Postal = ${conn.escape(Codigo_Postal)},Telefono = ${conn.escape(Telefono)},Email = ${conn.escape(Email)}, Ayuda = ${conn.escape(Ayuda)}
                WHERE ID_Cliente = ${conn.escape(ID_cliente)};`;

    conn.query(sql, error =>{
        if(error) throw error;

        res.json({Text: 'Actualizado!'});
    });            
});

router.put('/actualizarCliente',(req,res)=>{
    const {ID_cliente,Nombre,Paterno,Materno,Username,Pass} = req.body;
    const sql =`UPDATE Clientes 
                SET Nombre = ${conn.escape(Nombre)},Apellido_Paterno = ${conn.escape(Paterno)},Apellido_Materno = ${conn.escape(Materno)}, Nombre_Usuario = ${conn.escape(Username)},Contraseña = ${conn.escape(Pass)}
                WHERE ID_Cliente = ${conn.escape(ID_cliente)};`;

    conn.query(sql,(error)=>{
        if(error) throw error;

        res.json({Text: 'Actualizado'});
    });
});

//Peticiones DELETE (Eliminacion de datos)
router.delete('/cliente/:id',(req,res)=>{
    const ID = req.params.id;
    const sql = `DELETE FROM Clientes WHERE ID_Cliente=${conn.escape(ID)}`;
    conn.query(sql,error =>{
        if(error) throw error;
        res.json({Text: "Eliminado...."});
    });
});

router.delete('/pedido/:id',(req,res)=>{
    const ID = req.params.id;
    const sql = `SELECT Entregado FROM Pedidos WHERE ID_Pedido=${conn.escape(ID)}`;
    conn.query(sql,(error,results) =>{
        if(error) throw error;
        let Entregado = results[0].Entregado;
        if(!Entregado){
            res.json({Text: "No se puede eliminar"})
        } else{
            const sql1 =`DELETE FROM Pedidos WHERE ID_Pedido=${conn.escape(ID)}`;
            conn.query(sql1,error =>{
                if(error) throw error;
                res.json({Text: "Eliminado...."});  
            });
        }
    });
});

router.delete('/productoFavorito/:id',(req,res)=>{
    const idFavorito = req.params.id;
    const sql =`DELETE FROM Productos_Favoritos WHERE ID_Product_Favorito =${conn.escape(idFavorito)}`;

    conn.query(sql,error =>{
        if(error) throw error;
        res.json({Text: 'Eliminado'});
    });
});

router.delete('/pedidoProducto/:id',(req,res)=>{
    const idPedidoProducto = req.params.id;
    const sql = `DELETE FROM Pedidos_Productos WHERE ID_Pedido_Producto = ${conn.escape(idPedidoProducto)}`;

    conn.query(sql,error =>{
        if(error) throw error;
        res.json({Text: "Eliminado"});
    });
});

module.exports = router;