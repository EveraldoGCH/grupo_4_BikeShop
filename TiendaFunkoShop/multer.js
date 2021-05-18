// Multer
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        let folder = path.join(__dirname + "/public/images/profile_pics");
        cb(null,folder);
    },
    filename: function(req,file,cb){
        let name = Date.now() + path.extname(file.originalname);
        cb(null,name);
    }
});
const uploadFile = multer({storage: storage});

module.exports=uploadFile