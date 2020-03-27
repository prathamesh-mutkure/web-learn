// jshint esversion:6

const express = require("express");
const app = express();

app.listen(3000, function() {
    console.log("Server started at 3000");
});

app.get("/", function(req, res) {
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Email me at <strong>xyz@gmail.com</strong>");
});

app.get("/about", function (req, res) {
    res.send("<em>I'm Prathamesh Mutkure, A Web Developer</em>");
});
