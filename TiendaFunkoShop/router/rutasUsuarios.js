const userController = require('../controllers/userController');
const express=require('express')
const router=express.Router()
const path = require('path');
const upload_file= require('../multer')
const validarRegisterForm = require("../middlewares/validarRegisterForm");
const validarLoginForm = require("../middlewares/validarLoginForm");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware")


// Metodo GET
router.get('/login', guestMiddleware, userController.login);
router.get('/register', guestMiddleware, userController.register);
router.get('/profile',authMiddleware, userController.profile)
router.get('/logout', userController.logout);

// Metodo POST
router.post('/login', validarLoginForm, userController.loginProcess);
router.post('/register',upload_file.single("profileimg"), validarRegisterForm, userController.create);

module.exports = router;