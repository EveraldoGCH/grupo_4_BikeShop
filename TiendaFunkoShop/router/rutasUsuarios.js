const userController = require('../controllers/userController');
const express=require('express')
const router=express.Router()
const path = require('path');

const validarRegisterForm = require("../middlewares/validarRegisterForm");
const validarLoginForm = require("../middlewares/validarLoginForm");

const guestMiddleware = require("../middlewares/guestMiddleware");

// Multer
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        let folder = path.join(__dirname, "../public/images/profile_pics");
        cb(null,folder);
    },
    filename: function(req,file,cb){
        let name = Date.now() + path.extname(file.originalname);
        cb(null,name);
    }
});

const uploadFile = multer({storage: storage});

// Metodo GET
router.get('/login', guestMiddleware, userController.login);
router.get('/register', guestMiddleware, userController.register);

// Metodo POST
router.post('/login', validarLoginForm, userController.loginProcess);
router.post('/register', validarRegisterForm, uploadFile.single('profileimg'), userController.create);

module.exports = router;