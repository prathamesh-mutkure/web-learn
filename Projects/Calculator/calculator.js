//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
    console.log("Calculator server running at port 3000");
});

app.get("/", function (req, res) { 
    res.sendFile(__dirname + "/index.html")
 });

 app.post("/", function (req, res) {
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var add = num1 + num2;

    res.send("Result = " + add);
 });

 app.get("/bmi", function (req, res) {
     res.sendFile(__dirname + "/bmiCalculator.html");
 });

 app.post("/bmi", function (req, res) {
     var weight = req.body.weight;
     var height = req.body.height;
     var bmi = (weight)/Math.pow(height, 2);

     res.send("Your BMI is " + bmi);
 });
