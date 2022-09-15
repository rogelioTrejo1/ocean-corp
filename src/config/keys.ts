import { config } from "dotenv";
config();

export const KEYS = {
    NODE_ENV: process.env['NODE_ENV'] as string,
    PORT: +process.env['PORT']! || 3000,
    DATABES: {

    }
};