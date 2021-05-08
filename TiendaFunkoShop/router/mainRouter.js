const mainController = require('../controllers/mainController');
const controllerProductos = require('../controllers/controllerProductos');
const express=require('express')
const multer=require('multer')
const path=require('path')
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/profile_pics');

    },
    filename:function(req, file, cb){
        cb(null, `${Date.Now()}_img_${path.extname(file.originalname)}`)
    }
})
const router=express.Router()
const uploadFile=multer({storage})


router.get('/', mainController.index)
router.get('/login', mainController.login)
router.get('/register', mainController.register)
router.get('/productdetails', controllerProductos.productDetails)
router.get('/cart', controllerProductos.carrito)

module.exports=router