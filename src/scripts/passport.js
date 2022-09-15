const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const { conn } = require('./conexiones');
//const {descryptPassword,encryptPassword} = require('./helperst');

passport.use('local.login', new localStrategy({
    usernameField: 'Username',
    passwordField: 'Password',
    passReqToCallback: true
}, (req, Username, Password, done) => {
    const sql = `SELECT * FROM Clientes WHERE Nombre_Usuario = ${conn.escape(Username)};`;

    conn.query(sql, (error, result) => {
        if (error) throw error;

        if (result.length > 0) {
            const user = result[0];
            const validacion = Password === user.Contraseña;

            if (validacion) {
                done(null, user, req.flash('Messages', `Bienvenido ${user.Nombre} ${user.Apellido_Paterno} ${user.Apellido_Materno}`));
            } else {
                done(null, false, req.flash('Error', `Contraseña incorrecta!`));
            }
        } else {
            return done(null, false, req.flash('Error', 'El usuario no se encuentra registrado!'));
        }

    });
}));

passport.use('local.Registro', new localStrategy({
    usernameField: 'Username',
    passwordField: 'Password',
    passReqToCallback: true
}, (req, Username, Password, done) => {
    const { Nombre, Paterno, Materno, Password1 } = req.body;

    if (Password != Password1) {
        done(null, false, req.flash('Error', 'Las contraseñas insertadas no coinciden. Favor de verificarlas!'));
    } else {
        const sqlSelect = `SELECT * FROM Clientes WHERE Nombre_Usuario = ${conn.escape(Username)};`;
        conn.query(sqlSelect, async (error, result) => {
            if (error) throw error;

            if (result.length === 0) {
                //const newPassword = await encryptPassword(Password);
                const newUser = { Nombre, Paterno, Materno, Username, Password };
                const sql = `INSERT INTO Clientes(Nombre,Apellido_Paterno,Apellido_Materno,Foto_Perfil,Nombre_Usuario,Contraseña) 
                 VALUES(${conn.escape(Nombre)},${conn.escape(Paterno)},${conn.escape(Materno)},${conn.escape('/image/utils/Perfil.jpeg')},${conn.escape(Username)},${conn.escape(Password)});`;

                conn.query(sql, (error, result) => {
                    if (error) throw error;

                    newUser.ID_Cliente = result.insertId;
                    return done(null, newUser);
                });
            } else {
                done(null, false, req.flash('Error', 'El usuario que a escogido, no se encualtra disponible. Favor de cambiarlo!'));
            }
        });
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.ID_Cliente);
});

passport.deserializeUser((id, done) => {
    const sql = `SELECT * FROM Clientes WHERE ID_Cliente = ${conn.escape(id)};`;
    conn.query(sql, (error, result) => {
        if (error) throw error;
        done(null, result[0]);
    });
});