const controllerProductos = require('../controllers/controllerProductos');
const express=require('express')
const router=express.Router()
const db= require(".././database/models")
const Porducts = require(".././database/models/products");
const upload_file = require("../multer");
const path = require('path');
const adminMiddleware = require("../middlewares/adminMiddleware")
const auhtMiddleware = require("../middlewares/authMiddleware")

// Metodo GET
router.get('/productdetails', controllerProductos.productDetails)
router.get('/cart', controllerProductos.carrito)
router.get('/createProduct',auhtMiddleware, adminMiddleware, controllerProductos.indexCreateProduct)
router.get('/editProduct',auhtMiddleware, adminMiddleware, controllerProductos.editProduct)

// Metodo POST
router.post('/createProduct',upload_file.single("imagenNewProduct"), controllerProductos.createProduct)


module.exports=router