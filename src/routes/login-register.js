const { Router } = require('express');
const passport = require('passport');
const router = Router();
const {isNotLoggedIn,isLoggedIn} = require('../scripts/helperst');

//Rutas get
router.get('/Logout', isLoggedIn,(req,res)=>{
    req.logOut();
    res.redirect('/');
});

router.get('/Login', isNotLoggedIn,(req,res)=>{
    res.render('Login');
});

router.get('/Registro', isNotLoggedIn,(req,res)=>{
    res.render('Registro');
});

//Rutas post
router.post('/Login',passport.authenticate('local.login',{
    successRedirect: '/Productos',
    failureRedirect: '/login'
}));

router.post('/Registro',passport.authenticate('local.Registro',{
    successRedirect: '/Cuenta',
    failureRedirect: '/Registro'
}));

module.exports = router;
