//jshint jsversion:6

const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) { 
    res.sendFile(__dirname + "/index.html");
 })

app.post("/", function (req, res) {

    const cityName = req.body.cityName;
    const appid = 'ab6ac2ded8b4867bab2d7a2487b1e66d';
    const unit = 'metric';

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=" + appid + "&units=" + unit;
    
    https.get(url, function (response) {

        response.on('data', function (data) {

            const weatherData = JSON.parse(data);
            const weatherDesc = weatherData.weather[0].description;
            const temp = weatherData.main.temp;
            const icon = weatherData.weather[0].icon;
            const imgURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';

            res.write('<p>The weather is like ' + weatherDesc + '</p>');
            res.write('<h1>The tempreature in ' + cityName + ' is ' + temp + ' degree celsius</h1>');
            res.write('<img src="' + imgURL + '">');
            res.send();
        })
    })
})

app.listen(3000, function () {
    console.log("Server running at port 3000");
});
