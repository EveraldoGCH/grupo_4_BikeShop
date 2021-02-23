const controllerProductos = require('../controllers/controllerProductos');
const express=require('express')
const router=express.Router()

router.get('/productdetails', controllerProductos.productDetails)
router.get('/cart', controllerProductos.carrito)

module.exports=router