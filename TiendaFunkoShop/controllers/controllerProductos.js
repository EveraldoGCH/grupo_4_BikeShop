const path = require('path');
const db= require(".././database/models")
const Products = require(".././database/models/products.js");
const fs = require("fs");
const Sequelize = require("sequelize")
const  Op  = Sequelize.Op


const controllerProductos={
    productDetails: function(req, res){
        db.Products.findByPk(req.params.id)
        .then(function(producto){
            db.Products.findAll({
                offset:9,
                limit:6
            })
            .then(function(productos){
                res.render('./products/productdetails', {producto:producto, productos:productos})
            })
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
        console.log(req.params)
        return res.render('./products/category', {productos:productos, req});
    })
},
buscar:function(req, res){
    db.Products.findAll({
        where:{name_product:{[Op.like]: '%'+ req.query.busqueda + '%'}
    }
    }).then(function(productos){
        console.log(req.query.busqueda)
    return res.render('./products/search', {productos:productos});
    })
},
ingresos:function(req, res){
    db.Products.findAll({
        offset:9,
        limit:9
    })
    .then(function(productos){
        return res.render('./products/ingresos', {productos:productos});
    })
}
}
module.exports=controllerProductos