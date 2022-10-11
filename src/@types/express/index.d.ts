import { Client } from "../types";

declare global {
    namespace Express {
        export interface User extends Client { }

        export interface Request {
            error: Error
        }
    }
}