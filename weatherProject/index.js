const express= require("express");
const https=require("https");

const app=express();

app.get("/",function(req,res){
    const url="https://api.openweathermap.org/data/2.5/weather?q=Monterrey&appid=664bf8b2665ed22459bc699369ed1cb0&units=metric"
    
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weather_data=JSON.parse(data)
            const temp=weather_data.main.temp;
            const desc=weather_data.weather[0].description;
            console.log(temp);
            console.log(desc)
        })
    });

    res.send("Server is up and running")
})

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});