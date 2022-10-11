import { Router } from "express";
import fetch from "node-fetch";
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
router.get('/Productos/:id', async (req, res) => {
    const id = req.params.id;
    const resp = await fetch(`http://${req.headers.host}/api/productos/${id});`);
    const data = await resp.json();

    res.render('Producto', {
        body: data,
        user: req.user
    });
});

router.post('/fotoPerfil', isLoggedIn, async (req, res) => {
    const id = req.user?.ID_Cliente;
    const image = `image/uploads/${req.file?.filename}`;

    await fetch(`http://${req.headers.host}/api/Perfil`, {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({ id, image })
    });

    res.redirect('/Cuenta');
});

export default router;