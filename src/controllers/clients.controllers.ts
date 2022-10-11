// Dependencias
import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { OkPacket } from "mysql2";
import { Client_DB, Client_Data_DB } from "../@types/types";
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
        const [results] = await conn.query<Client_DB[]>(sql);

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
        else
            req.error = e as Error;

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
        const [result] = await conn.query<Client_DB[]>(sql, [id]);

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
        const [result] = await conn.query<Client_DB[]>(sqlClient, [id]);

        if (result.length === 0)
            return res.status(StatusCodes.NOT_FOUND)
                .json({
                    status: StatusCodes.NOT_FOUND,
                    resp: true,
                    message: ReasonPhrases.NOT_FOUND
                });

        // Busco la información del cliente
        const sql = 'SELECT * FROM Datos_Clientes WHERE ID_Cliente = ?';
        const [resultData] = await conn.query<Client_Data_DB[]>(sql, [id]);

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

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function postDataClient(req: Request, res: Response): Promise<Response> {
    try {
        // Optengo el cuerpo de la peticion 
        const newDataClient = req.body;

        // Creo y ejecuto la sentencia SQL
        const sql = 'INSERT INTO Datos_Clientes SET ?';
        const [result] = await conn.execute<OkPacket>(sql, [newDataClient]);

        // Mando la respuesta al cliente
        return res.status(StatusCodes.CREATED)
            .json({
                status: StatusCodes.CREATED,
                message: ReasonPhrases.CREATED,
                resp: true,
                body: result
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