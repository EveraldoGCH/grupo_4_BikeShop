const mainController = require('../controllers/mainController');
const express=require('express');
const router=express.Router();
const db= require(".././database/models")
const Porducts = require(".././database/models/products");

router.get('/', mainController.index);

module.exports=router;