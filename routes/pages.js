const express = require ('express');
const path = require('path');
const router = express.Router();

router.get('/comparar',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/comparar.html'));
});
router.get('/carrito',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/carrito.html'));
});
router.get('/calcula',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/calculadora.html'));
});



module.exports=router;