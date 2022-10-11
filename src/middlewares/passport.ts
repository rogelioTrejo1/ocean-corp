import passport from "passport";
import conn from "../config/database";
import { Strategy as localStrategy } from "passport-local";
import { Client, Client_DB } from "../@types/types";
import { OkPacket } from "mysql2";
import { encryptPassword, descryptPassword } from "../scripts/helperst";

passport.use('local.login', new localStrategy({
    usernameField: 'Username',
    passwordField: 'Password',
    passReqToCallback: true
}, async (req, Username, Password, done) => {
    const sql = `SELECT * FROM Clientes WHERE Nombre_Usuario = ?;`;
    const [result] = await conn.query<Client_DB[]>(sql, [Username]);

    if (result.length === 0) {
        req.flash('Error', 'El usuario no se encuentra registrado!')
        return done(null, false);
    }

    const [user] = result;
    const passwordValidation = await descryptPassword(Password, user.Contraseña!)

    if (!passwordValidation) {
        req.flash('Error', `Contraseña incorrecta!`)
        return done(null, false);
    }

    req.flash('Messages', `Bienvenido ${user.Nombre} ${user.Apellido_Paterno} ${user.Apellido_Materno}`)
    return done(null, user);
}));

passport.use('local.Registro', new localStrategy({
    usernameField: 'Username',
    passwordField: 'Password',
    passReqToCallback: true
}, async (req, Username, Password, done) => {
    const { Nombre, Paterno, Materno, Password1 } = req.body;

    if (Password != Password1) {
        req.flash('Error', 'Las contraseñas insertadas no coinciden. Favor de verificarlas!')
        return done(null, false);
    }

    const sqlSelect = `SELECT * FROM Clientes WHERE Nombre_Usuario = ?;`;
    const [result] = await conn.query<Client_DB[]>(sqlSelect, [Username]);

    // Valido si Existe el usuario en la base de datos
    if (result.length !== 0) {
        req.flash('Error', 'El usuario que a escogido, no se encuentra disponible. Favor de cambiarlo!')
        done(null, false);
    }

    const newUser: Client = {
        Nombre,
        Apellido_Paterno: Paterno,
        Apellido_Materno: Materno,
        Nombre_Usuario: Username,
        Contraseña: await encryptPassword(Password),
        Foto_Perfil: '/image/utils/Perfil.jpeg'
    };

    const sql = 'INSERT INTO Clientes SET ?;';
    const [inserResult] = await conn.execute<OkPacket>(sql, [newUser]);

    newUser.ID_Cliente = inserResult.insertId;
    return done(null, newUser);
}));

passport.serializeUser((user, done) => {
    done(null, user.ID_Cliente);
});

passport.deserializeUser(async (id, done) => {
    const sql = `SELECT * FROM Clientes WHERE ID_Cliente = ?;`;
    const [[user]] = await conn.query<Client_DB[]>(sql, [id]);
    done(null, user);
});