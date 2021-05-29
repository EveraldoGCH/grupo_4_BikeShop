const controllerProductos = require('../controllers/controllerProductos');
const express=require('express')
const router=express.Router()
const db= require(".././database/models")
const Products = require(".././database/models/products");
const upload_file = require("../multer");
const path = require('path');
const adminMiddleware = require("../middlewares/adminMiddleware")
const auhtMiddleware = require("../middlewares/authMiddleware")

// Metodo GET
router.get('/productdetails/:id', controllerProductos.productDetails)
router.get('/cart', controllerProductos.carrito)
router.get('/createProduct',auhtMiddleware, adminMiddleware, controllerProductos.indexCreateProduct)
router.get('/editProduct/:id',auhtMiddleware, adminMiddleware, controllerProductos.editProduct)
router.get('/productlist', controllerProductos.lista)
router.get('/vistaNoAdmin', controllerProductos.noAdmin)
router.get('/search', controllerProductos.buscar)
router.get('/new', controllerProductos.ingresos)
router.get('/:categoria', controllerProductos.category)

// Metodo POST
router.post('/createProduct',upload_file.single("imagenNewProduct"), controllerProductos.createProduct)
router.post('/editProduct/:id', controllerProductos.editProductPost)


module.exports=router