// REQUIRES
const fs = require("fs");
const { validationResult } = require("express-validator");
const path = require("path");
const bcrypt = require("bcryptjs");
const db= require(".././database/models")
const Users = require(".././database/models/Users.js");
const Products = require(".././database/models/products.js");

// Acceso a database JSON
const usersDataBase = path.join(__dirname, "../data/users.json");



// Controlador usuarios
const userController = {
    // GET de login
    login: function(req, res){
        res.render('./users/login');
    },
    // Get de register
    register: function(req, res){
        res.render('./users/register');
    },
    profile: function(req, res){
        return res.render('./users/profile', {user: req.session.userLogged})
    },

        
    // POST de login
    loginProcess: function (req,res){
        let errores = validationResult(req);
        if(errores.isEmpty()){
            // Comprobar si hay un email registrado
            db.Users.findOne({
                where:{
                    user_email:req.body.email
                }
            }).then(function(usuario){
                if(usuario==null) {
                    return res.render('./users/register', {
                        errores: {
                            email: {
                                msg: "Debes registrarte antes de iniciar sesión."}}
                })
                }
                else {
                //comparar password
                let okPassword = bcrypt.compareSync(req.body.password, usuario.password)
                if(okPassword){
                    delete usuario.password;
                    req.session.userLogged = usuario;
                    // guardar cookie
                    if (req.body.recordar) {
                        res.cookie("rememberUser", req.body.email, { maxAge: 60000 })
                    }
                    return res.redirect("./profile");
                }
                else{
                return res.render('./users/login',{
                    errores: {
                        email: {
                            msg: "Credenciales inválidas!",
                        }
                    },
                    old: req.body
                })}
            }


            })
            
            // verificar si el email esté en uso
            db.Users.findOne({
                where:{
                    user_email: req.body.email
                }
            })
            .then(function(usuario){
                if(usuario==null) {
                    return res.render('./users/login', {
                        errores: {
                            email: {
                                msg: "Este e-mail no está en uso."
                            }
                        },
                        old: req.body
                    })
                }
                else {
            return res.render('./users/login', {
                errores: errores.mapped(),
                old: req.body
            })
        }   });}    
    },

    // POST de register
    create: function (req,res){
        console.log("hola")
    let errores = validationResult(req);
    // si hay errores, mostrarlos en texto
    if(!errores.isEmpty()){
        return res.render('./users/register', {
            errores: errores.mapped(),
            old: req.body
        });
    }
    // comprobar si el email está en uso
    db.Users.findOne({
        where:{
            user_email: req.body.email
        }
    })
    .then(function(usuario){
    if(usuario!=null) {
        return res.render('./users/register', {
            errores: {
                email: {
                    msg: "Este e-mail ya está en uso."
                }
            },
            old: req.body
        })
    } else{
    // Crear usuario en la data
    db.Users.create({
        user_name: req.body.name,
        user_email: req.body.email,
        // encriptar password
        password: bcrypt.hashSync(req.body.password, 10),
        profile_img: req.file.filename,
        admin_user: "no"
    })
    .then(function(){
     return res.redirect("/users/login")
    })
}
})
    },
// Para cerrar sesion y destruir cookies del usuario logueado
logout: function(req,res) {
    res.clearCookie("rememberUser");
    req.session.destroy();
    return res.redirect("/");
},
profileEdit:function(req,res){
    db.Users.update({
    user_name: req.body.nuevoNombreEdit,
    user_password:bcrypt.hashSync(req.body.nuevaContraseñaEdit, 10)
},
{
    where:{
        profile_img:req.session.profile_img
    }
})
.then(function(){
res.redirect("/products/productdetails/"+req.params.id)    
})


}

}

module.exports = userController