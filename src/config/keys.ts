// Variables de entorno
import { config } from "dotenv";
config();

export default {
    // Variables de Sistema
    NODE_ENV: process.env.NODE_ENV!,
    PORT: Number(process.env.PORT) || 3000,

    // Variables para la base de datos
    DB_HOST: process.env.BD_HOST || "localhost",
    DB_USER: process.env.BD_USER || "root",
    DB_PASS: process.env.DB_PASS || "",
    DB_DATABASE: process.env.DB_DATABASE || "ocean-corp"
};