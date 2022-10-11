// Dependecias
import express, { static as staticFiles, Application, urlencoded, json } from "express";
import { join, resolve } from "path";
import morgan from "morgan";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import flash from "connect-flash";
import multer from "multer";
import { engine } from "express-handlebars";
import { accessLogger, errorLogger } from "./middlewares/logger";

import KEYS from "./config/keys";

// Middlewares
import { perfilFileStorange } from "./middlewares/multer";
import "./middlewares/passport";

// Rutas
import routesApi from "./routes/api";
import routes from "./routes/routers";
import loginRoutes from "./routes/login-register";

// Inicilizaciones
const app: Application = express();

// Configuración
app.set('port', KEYS.PORT);
app.set('views', resolve(__dirname, '..', 'views'));
app.set('rootDir', resolve(__dirname, '..'))
app.set('view engine', '.hbs');
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
}));
// morgan.token("error", (req, res) => `${req.} - ${}`);


//middelware
if (KEYS.NODE_ENV !== "dev")
    app.use(morgan('dev'));
else {
    app.use(morgan('combined', {
        skip: (req, res) => res.statusCode < 400,
        stream: errorLogger
    }));

    app.use(morgan('dev', {
        stream: accessLogger
    }));
}

app.use(cors());
app.use(flash());
app.use(json());
app.use(urlencoded({ extended: false }));
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
