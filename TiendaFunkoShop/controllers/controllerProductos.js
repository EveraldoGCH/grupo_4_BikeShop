const controllerProductos={
    productDetails: function(req, res){
        res.render('./products/productdetails');
    },
    carrito:function(req, res){
        res.render('./products/cart')
}
}
module.exports=controllerProductos