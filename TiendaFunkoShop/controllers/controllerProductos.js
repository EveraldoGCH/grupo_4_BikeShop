const path = require('path');
const db= require(".././database/models")
const Products = require(".././database/models/products.js");
const fs = require("fs");
const Sequelize = require("sequelize")
const  Op  = db.Sequelize.Op

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
        db.Products.findByPk(req.params.id)
        .then(function(productoedit){
         res.render('./products/editProduct', {productoedit:productoedit})   
        })
        
    },

    editProductPost: function(req,res){
            db.Products.update({
            name_product: req.body.nameProductEdit,
            product_description: req.body.descripEditProduct,
            price: req.body.precioEditProduct,
            category:req.body.categoryNewProduct
        },
        {
            where:{
                id_product:req.params.id
            }
        })
        .then(function(){
        res.redirect("/products/productdetails/"+req.params.id)    
        })
        
    
    },

    createProduct:function(req,res){
        db.Products.create({
            name_product: req.body.nombreNewProduct,
            product_description:req.body.descripNewProduct,
            price: req.body.precioNewProduct,
            category:req.body.categoryNewProduct,
            image_product: req.file.filename
        })
        .then(function(){
         return res.redirect("./productlist")   
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
        
        
},
category: function(req, res){
    db.Products.findAll({where: {
        category: req.params.categoria
    }})
    .then(function(productos){
        return res.render('./products/category', {productos:productos});
    })
},
buscar:function(req, res){
    db.Products.findAll({
        where:{name_product:{[Op.Like]: '%'+ req.query.busqueda + '%'}
    }
    }).then(function(productos){
        console.log(req.query.busqueda)
    return res.render('./products/search', {productos:productos});
    })
},


}
module.exports=controllerProductos