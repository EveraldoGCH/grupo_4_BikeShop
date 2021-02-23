const mainController = require('../controllers/mainController');
const controllerProductos = require('../controllers/controllerProductos');
const express=require('express')
const router=express.Router()


router.get('/', mainController.index)
router.get('/login', mainController.login)
router.get('/register', mainController.register)
router.get('/productdetails', controllerProductos.productDetails)
router.get('/cart', controllerProductos.carrito)

module.exports=router