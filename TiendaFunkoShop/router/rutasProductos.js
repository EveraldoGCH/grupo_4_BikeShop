const controllerProductos = require('../controllers/controllerProductos');
const express=require('express')
const router=express.Router()

router.get('/productdetails.ejs', controllerProductos.productDetails)
router.get('/cart.ejs', controllerProductos.carrito)

module.exports=router