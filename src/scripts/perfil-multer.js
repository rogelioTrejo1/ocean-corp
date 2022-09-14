const multer = require('multer');
const path = require('path');

const storage_perfil = multer.diskStorage({
    destination: path.join(__dirname,'../public/image/uploads'),
    filename(req,file,cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

const upload = multer({storage:storage_perfil}).single('perfil');

module.exports = upload;