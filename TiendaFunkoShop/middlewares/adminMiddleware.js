const db= require(".././database/models")
const Users = require(".././database/models/Users.js");


function adminMiddleware(req,res,next) {
    if(req.session.userLogged.admin_user!="si"){
        return res.redirect("/products/vistaNoAdmin");
    }
    next();
}

module.exports = adminMiddleware;