var express =require('express');
var router =express.Router();
var useController =require("../controllers/film");

router.get('/film',useController.getAll);
module.exports=router;