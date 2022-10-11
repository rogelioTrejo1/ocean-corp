// Variables de entorno
import { config } from "dotenv";
import { resolve } from "path";

config({ path: ".env" });

export default {
    // Variables de Sistema
    NODE_ENV: process.env.NODE_ENV!,
    PORT: Number(process.env.PORT) || 3000,

    // Variables para la base de datos
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_USER: process.env.DB_USER || "root",
    DB_PASS: process.env.DB_PASS || "",
    DB_DATABASE: process.env.DB_DATABASE || "ocean-corp",
    DB_PORT: Number(process.env.DB_PORT) || 3306,

    // Valiables extra
    PATH_LOG: process.env.PATH_LOG || resolve(__dirname, "../../logs")
};