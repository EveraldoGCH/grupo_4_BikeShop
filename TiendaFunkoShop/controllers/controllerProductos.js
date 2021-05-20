const path = require('path');
const db= require(".././database/models")
const Products = require(".././database/models/products.js");
const fs = require("fs");

const controllerProductos={
    productDetails: function(req, res){
        db.Products.findByPk(req.params.id)
        .then(function(producto){
            res.render('./products/productdetails', {producto:producto});
        })
        
    },
    carrito:function(req, res){
        res.render('./products/cart')
},
    indexCreateProduct:function(req,res){
        res.render('./products/createProduct')
    },
    editProduct:function(req,res){
        res.render('./products/editProduct')
    },
    createProduct:function(req,res){
        db.Products.create({
            name_product: req.body.nombreNewProduct,
            product_description:req.body.descripNewProduct,
            price: req.body.precioNewProduct,
            image_product: req.file.filename
        })
        .then(function(){
         return res.redirect("./productdetails/:id")   
        })
    },
    lista: function(req, res){
            db.Products.findAll()
            .then(function(productos){
                return res.render('./products/ProductList', {productos:productos});
            })
            
    },
    noAdmin: function(req, res){
            return res.render('./products/vistaNoAdmin');
        
        
}
}
module.exports=controllerProductos