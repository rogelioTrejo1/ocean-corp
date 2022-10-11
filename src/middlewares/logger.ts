import { join } from "path";
import rfs from "rotating-file-stream";
import KEYS from "../config/keys";

export const errorLogger = rfs.createStream('error', {
    interval: "1d",
    path: join(KEYS.PATH_LOG, "error")
});

export const accessLogger = rfs.createStream('access', {
    interval: "1d",
    path: join(KEYS.PATH_LOG, "access")
});