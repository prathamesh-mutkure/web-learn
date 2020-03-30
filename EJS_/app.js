//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.send('Server Started')
})

app.get('/day', function (req, res) {

    const listOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const date = new Date()
    const today = date.getDay();
    const day = listOfDays[today];

    res.render('day', {
        day: day
    })
})

app.listen(3000, function () {
    console.log("Server running at port 3000")
})
