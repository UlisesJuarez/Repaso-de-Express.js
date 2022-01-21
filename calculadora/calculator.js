//jshint esversion:6

const express=require("express");
const app=express();

app.get("/",function(req,res){
    res.send("Hello wold!")
});

app.listen(3000,function(){
    console.log("Server run on port 3000")
});
