import { Router } from "express";
import request from "request";
import { isLoggedIn } from "../scripts/helperst";

const router = Router();

//Rutas principales
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/Productos', (req, res) => {
    res.render('Productos');
});

router.get('/Servicios', isLoggedIn, (req, res) => {
    res.render('Servicios');
});

router.get('/Cuenta', isLoggedIn, (req, res) => {
    res.render('Cuenta');
});

router.get('/Favoritos', isLoggedIn, (req, res) => {
    res.render('Favoritos');
});

router.get('/Pedidos', isLoggedIn, (req, res) => {
    res.render('Pedidos');
});

//Rutas compuestas
router.get('/Productos/:id', (req, res) => {
    const id = req.params.id;
    request.get(`http://${req.headers.host}/api/productos/${id}`, (error, result) => {
        if (error) throw error;
        const resp = JSON.parse(result.body);
        res.render('Producto', {
            body: resp[0],
            user: req.user
        });
    });
});

router.post('/fotoPerfil', isLoggedIn, async (req, res) => {
    const id = req.user.ID_Cliente!;
    const image = `image/uploads/${req.file?.filename}`;

    await request.put({
        url: `http://${req.headers.host}/api/Perfil`,
        headers: {
            'Content-type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({ id, image }),
    });
    res.redirect('/Cuenta');
});

export default router;