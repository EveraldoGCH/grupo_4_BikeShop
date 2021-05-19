// Multer
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        if(req.path=="/createProduct"){
        let folder = path.join(__dirname + "/public/images");
        cb(null,folder);}
        else if (req.path=="/register"){
            let folder = path.join(__dirname + "/public/images/profile_pics");
            cb(null,folder);}
    },
    filename: function(req,file,cb){
        let name = Date.now() + path.extname(file.originalname);
        cb(null,name);
    }
});
const uploadFile = multer({storage: storage});

module.exports=uploadFile