// Dependencias
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const passport = require('passport');
const flash = require('connect-flash');
const multer = require('multer');
const { engine } = require('express-handlebars');

// Inicilizaciones
const app = express();
require("./scripts/passport");

// Configuración
app.set('port', process.env['PORT'] || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

//middelware
app.use(cors());
app.use(morgan('dev'));
app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'Ocen-Corp/MySQL',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore({
        user: "rogelio",
        password: "4492316585",
        database: "ocean-corp",
        port: 3306
    })
}));
app.use(passport.initialize());
app.use(passport.session());


const storage = multer.diskStorage({
    destination: path.join(__dirname, '/public/image/uploads'),
    filename: (_, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({ storage }).single('perfil'));

//Variables globales
app.use((req, _, next) => {
    app.locals['error'] = req.flash('Error');
    app.locals['message'] = req.flash('Messages');
    app.locals['host'] = "";
    app.locals['user'] = req.user;
    next();
});

//routers
app.use('/api', require(path.join(__dirname, './routes/api')));
app.use(require(path.join(__dirname, './routes/routers')));
app.use(require(path.join(__dirname, './routes/login-register')));

//static files
app.use(express.static(path.join(__dirname, './public')));

app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
});