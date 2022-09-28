import { Router } from "express";
import passport from "passport";
import { isLoggedIn, isNotLoggedIn } from "../scripts/helperst";

const router = Router();

//Rutas get
router.get('/Logout', isLoggedIn, (req, res) => {
    req.logout(() => null);
    res.redirect('/');
});

router.get('/Login', isNotLoggedIn, (req, res) => {
    res.render('Login');
});

router.get('/Registro', isNotLoggedIn, (req, res) => {
    res.render('Registro');
});

//Rutas post
router.post('/Login', passport.authenticate('local.login', {
    successRedirect: '/Productos',
    failureRedirect: '/login'
}));

router.post('/Registro', passport.authenticate('local.Registro', {
    successRedirect: '/Cuenta',
    failureRedirect: '/Registro'
}));

export default router;
