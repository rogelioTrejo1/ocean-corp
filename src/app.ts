// Dependecias
import express, { static as staticFiles } from "express";
import { join, resolve } from "path";
import morgan from "morgan";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import flash from "connect-flash";
import multer from "multer";
import { engine } from "express-handlebars";

import { perfilFileStorange } from "./middlewares/multer";

// Rutas
import routesApi from "./routes/api";
import routes from "./routes/routers";
import loginRoutes from "./routes/login-register";

import "./middlewares/passport";

// Inicilizaciones
const app = express();

// Configuración
app.set('port', process.env['PORT'] || 3000);
app.set('views', resolve(__dirname, '..', 'views'));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
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
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(multer({ storage: perfilFileStorange }).single('perfil'));

//Variables globales
app.use((req, _, next) => {
    app.locals.error = req.flash('Error');
    app.locals.message = req.flash('Messages');
    app.locals.host = "";
    app.locals.user = req.user;
    next();
});

//routers
app.use('/api', routesApi);
app.use(routes);
app.use(loginRoutes);

//static files
app.use(staticFiles(resolve(__dirname, '..', 'public')));

export default app;
