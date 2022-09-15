// Dependencias
import mysql from "mysql2";
import { KEYS } from "./keys";

// Genero la conexión a la base de datos
const pool = mysql.createPool(KEYS.DATABES);

pool.getConnection((error, connection) => {
    // Si existe algun error lo muestro por consola validando el tipo de error
    if (error) {
        if (error.code === 'PROTOCOL_CONNECTION_LOST')
            console.error("BASE DE DATOS CERRADA!");

        else if (error.code === 'ER_CON_COUNT_ERROR')
            console.error("DEMACIADAS CONEXIÓNES A LA BASE DE DATOS!");

        else if (error.code === 'ECONNREFUSED')
            console.error("CONEXIÓN A LA BASE DE DATOS REUTILIZADA!");

        else
            console.error("ERRORN CON LA BASE DE DATOS: ", error);

        return;
    }

    // Si se genero la connecion genero un mensaje
    if (connection)
        connection.release();

    // Mensaje de conexión
    console.log(">>DB esta conectada!");

    // Salgo de la función con este return!
    return;
});

// Exportación del modulo
export default pool.promise();