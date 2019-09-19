const express =require('express');
const rute=express.Router();
const useControl=require("../controllers/film");
rute.get('/',useControl.getAll);
rute.post('/',useControl.addMovie);
module.exports=rute;