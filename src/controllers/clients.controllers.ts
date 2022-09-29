// Dependencias
import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { RowDataPacket } from "mysql2";
import KEYS from "../config/keys";
import conn from "../config/database";

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getClients(req: Request, res: Response): Promise<Response> {
    try {
        // Creo y ejecuto la sentencia SQL
        const sql = 'SELECT * FROM Clientes';
        const [results] = await conn.query<Client[]>(sql);

        // Mando la respuesta al cliente
        return res.status(StatusCodes.OK)
            .json({
                status: StatusCodes.OK,
                message: ReasonPhrases.OK,
                resp: true,
                body: results
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
export async function getClient(req: Request, res: Response): Promise<Response> {
    try {
        // Optengo los parametros
        const { id } = req.params;

        // Creo y ejecuto la sentencia SQL
        const sql = 'SELECT * FROM Clientes WHERE ID_Cliente = ?';
        const [result] = await conn.query<Client[]>(sql, [id]);

        if (result.length === 0)
            return res.status(StatusCodes.NOT_FOUND)
                .json({
                    status: StatusCodes.NOT_FOUND,
                    resp: true,
                    message: ReasonPhrases.NOT_FOUND
                });

        return res.status(StatusCodes.OK)
            .json({
                status: StatusCodes.OK,
                message: ReasonPhrases.OK,
                resp: true,
                body: result[0]
            });
    } catch (e) {
        // Implmentacion de logger
        if (KEYS.NODE_ENV === "dev")
            console.log(e);
        else {
            // Implmentacion del logger
        }

        // Respuesta por defecto
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                resp: false,
                error: e,
                message: ReasonPhrases.INTERNAL_SERVER_ERROR
            });
    }
}

/**
 * 
 * @param req 
 * @param res 
 */
export async function getDataClient(req: Request, res: Response): Promise<Response> {
    try {
        // Optengo los parametros
        const { id } = req.params;

        // Creo y ejecuto la sentencia SQL
        const sqlClient = 'SELECT * FROM Clientes WHERE ID_Cliente = ?';
        const [result] = await conn.query<Client[]>(sqlClient, [id]);

        if (result.length === 0)
            return res.status(StatusCodes.NOT_FOUND)
                .json({
                    status: StatusCodes.NOT_FOUND,
                    resp: true,
                    message: ReasonPhrases.NOT_FOUND
                });

        // Busco la información del cliente
        const sql = 'SELECT * FROM Datos_Clientes WHERE ID_Cliente = ?';
        const [resultData] = await conn.query<Client_Data[]>(sql, [id]);

        // Limpio los datos inesesarios del cliente
        const { ID_Cliente, ID_Registro, ...clientData } = resultData[0];

        // Mando la respuesta al cliente
        return res.status(StatusCodes.OK)
            .json({
                status: StatusCodes.OK,
                message: ReasonPhrases.OK,
                resp: true,
                body: {
                    ...result[0],
                    datos: clientData
                }
            });
    } catch (e) {
        // Implmentacion de logger
        if (KEYS.NODE_ENV === "dev")
            console.log(e);
        else {
            // Implmentacion del logger
        }

        // Respuesta por defecto
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                resp: false,
                message: ReasonPhrases.INTERNAL_SERVER_ERROR,
                error: e
            });
    }
}

// Types of data
/**
 * 
 */
type Client = RowDataPacket & {
    ID_Cliente: number;
    Nombre: string;
    Apellido_Paterno: string;
    Apellido_Materno: string;
    Foto_Perfil: string;
    Nombre_Usuario: string;
    Contraseña: string
}

/**
 * 
 */
type Client_Data = RowDataPacket & {
    ID_Registro: number;
    ID_Cliente: number
    Calle: string;
    No_Interno: number;
    No_Externo: number;
    Fraccionamiento: string;
    Codigo_Postal: number;
    Telefono: string;
    Email: string;
    Ayuda: string;
}