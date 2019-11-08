const express = require("express");
const dataStore = require('nedb');
const fetch = require("node-fetch");
const app = express();
const database = new dataStore("database.db");
database.loadDatabase();

app.listen(3000,() => console.log("lelethu listerning"));
app.use(express.static("../public"));
app.use(express.json({limit: "1mb"}));

app.get("/lelethungalo",(request, response) => {
    database.find({"longitude":18.461171699999998}, (error,dataStored) => response.json(dataStored));
    
})

app.get("/weather/:data",async (request, response) => {
    const papa = request.params.data.split(",");
    const lat = papa[0];
    const longi = papa[1];
    
    const weather_res = await fetch(`https://api.darksky.net/forecast/f81c9341a7baba619f35e347fe525e29/${lat},${longi}`);
    const json = await weather_res.json();
    response.json(json);
})

app.post("/lelethungalo",(request, response) => {
    console.log(request.body.longitude);
    const lat = request.body.longitude;
   
    database.insert({longitude: lat,
    name:"lelethu",
    surname: "ngalo"});
    const newData = database.find();
    console.log(newData);
    response.json({
        status: "success",
        lati: lat
    });
});