const express = require("express")
const app = express();
const approval =false;
const film=require('./routes/film')
const filmData=require('./models/film')
const bodyParser =require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
const load = (req,res,next)=>{
    if(approval){
        next();
    }else{
        res.send("yess")
    }
}
app.use("/film",film);
//app.use(users);
app.get("/",load,(req,res)=>res.send("Hello Guntur"));
app.get("/sapa",(req,res,next)=>res.send("Wkkk"));

app.delete('/delete/:id',(req,res)=>{
    filmData.splice(req.params.id-1,1)
    res.send({
        filmData
    })
})

const port =1605
app.listen(port,()=>console.log("Your Server running on port"+port));