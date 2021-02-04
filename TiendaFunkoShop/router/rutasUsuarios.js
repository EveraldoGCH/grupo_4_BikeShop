const mainController = require('../controllers/mainController');
const express=require('express')
const router=express.Router()

router.get('/login.ejs', mainController.login)
router.get('/register.ejs', mainController.register)

module.exports=router