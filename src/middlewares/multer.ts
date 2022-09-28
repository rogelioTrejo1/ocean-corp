import { diskStorage, DiskStorageOptions } from "multer";
import { resolve, extname } from "path";

const perfilFileStorangeOptions: DiskStorageOptions = {
    destination: resolve(__dirname, '..', 'public', 'image', 'uploads'),
    filename: (_, file, cb) => {
        cb(null, new Date().getTime() + extname(file.originalname));
    }
};

export const perfilFileStorange = diskStorage(perfilFileStorangeOptions);