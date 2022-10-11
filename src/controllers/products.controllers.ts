// Dependencias
import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { Product_DB } from "../@types/types";
import KEYS from "../config/keys";
import conn from "../config/database";

/**
 * 
 * @param req 
 * @param res 
 */
export async function getProducts(req: Request, res: Response): Promise<Response> {
    try {
        // Creo y ejecuto la sentencia SQL
        const sql = 'SELECT * FROM Productos;';
        const [products] = await conn.query<Product_DB[]>(sql);

        // Mando la respuesta al cliente
        return res.status(StatusCodes.OK)
            .json({
                status: StatusCodes.OK,
                message: ReasonPhrases.OK,
                resp: true,
                body: products
            });

    } catch (e) {
        if (KEYS.NODE_ENV === "dev")
            console.log(e);

        // Respuesta por defecto
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                message: ReasonPhrases.INTERNAL_SERVER_ERROR,
                resp: false,
                error: e
            });
    }
}

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getProduct(req: Request, res: Response): Promise<Response> {
    try {
        // Parametros de la petición
        const { id } = req.params;

        // Se busca el producto por id
        const sql = 'SELECT * FROM Productos WHERE ID_Producto = ?;';
        const [products] = await conn.query<Product_DB[]>(sql, [id]);

        // Mando respuesta 404 si no existe el producto buscado
        if (products.length === 0)
            return res.status(StatusCodes.NOT_FOUND)
                .json({
                    status: StatusCodes.NOT_FOUND,
                    message: ReasonPhrases.NOT_FOUND,
                    resp: false,
                });

        // Mando la respueta al usuario
        return res.status(StatusCodes.NOT_FOUND)
            .json({
                status: StatusCodes.OK,
                message: ReasonPhrases.OK,
                resp: true,
                body: products[0]
            });
    } catch (e) {
        if (KEYS.NODE_ENV === "dev")
            console.log(e);

        // Respuesta por defecto
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                message: ReasonPhrases.INTERNAL_SERVER_ERROR,
                resp: false,
                error: e
            });
    }
}
