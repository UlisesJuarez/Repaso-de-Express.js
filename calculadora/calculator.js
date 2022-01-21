//jshint esversion:6

const express=require("express");
const app=express();

app.get("/",function(req,res){
    //send palabras
    // res.send("Hello wold!")

    //send paginas __dirname=directorio actual
    res.sendFile(__dirname+"/index.html");
});

app.listen(3000,function(){
    console.log("Server run on port 3000")
});
