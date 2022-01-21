//jshint esversion:6

const express=require("express");
const app=express();

app.get("/",function(request,response){
    response.send("<h1>Hello world!</h1>");
});

app.get("/contact",function(req,res){
    res.send("<h2>Contact me at: uje170399@gmail.com</h2>")
});

app.get("/about",function(req,res){
res.send("<h3>My name is Ulises. I'm a mexican full stack Developer</h3>/")
});

app.get("/hobbies",function(req,res){
    res.send("Programming, play videogames, listen music")
})
app.listen(3000,function(){
    console.log("Server started on port 3000")
});