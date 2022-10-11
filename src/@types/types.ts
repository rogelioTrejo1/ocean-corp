// Dependecias 
import { RowDataPacket } from "mysql2";

/**
 * 
 */
export type Client = {
    ID_Cliente?: number;
    Nombre?: string;
    Apellido_Paterno?: string;
    Apellido_Materno?: string;
    Foto_Perfil?: string;
    Nombre_Usuario?: string;
    Contraseña?: string
};

/**
 * 
 */
export type Client_Data = {
    ID_Registro?: number;
    ID_Cliente?: number
    Calle?: string;
    No_Interno?: number;
    No_Externo?: number;
    Fraccionamiento?: string;
    Codigo_Postal?: number;
    Telefono?: string;
    Email?: string;
    Ayuda?: string;
};

/**
 * 
 */
export type Product = {
    ID_Producto?: number;
    Producto?: string;
    Categoria?: string;
    Descriptcion?: string;
    Precio?: number;
    Imagen?: string;
    Disponibilidad?: boolean;
};

/**
 * 
 */
export type Product_DB = RowDataPacket & Product;

/**
 * 
 */
export type Client_DB = RowDataPacket & Client;

/**
 * 
 */
export type Client_Data_DB = RowDataPacket & Client_Data;