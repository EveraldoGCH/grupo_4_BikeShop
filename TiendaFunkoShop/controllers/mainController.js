const path = require("path");
const db= require(".././database/models")
const Products = require(".././database/models/products");

const mainController={
    index: function(req, res) {
        db.Products.findAll({
            limit:9
        })
        .then(function(productos){
            return res.render('index', {productos:productos});
        })
    },
     home: (req, res) => {
        return res.sendFile(path.join(`${__dirname}/../views/index.html`));
     }
}
module.exports=mainController