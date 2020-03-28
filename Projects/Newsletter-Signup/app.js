//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')
const https = require('https')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public/'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/signup.html")
})

app.post('/', function (req, res) {

    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data)

    const url = 'https://us19.api.mailchimp.com/3.0/lists/f33633632d'

    const options = {
        method: 'POST',
        auth: "prathameshm009:938d86e23e3a124d0935346072ab44e6-us19"
    }

    const request = https.request(url, options, function (response) {

        if (response.statusCode == 200) {
            res.sendFile(__dirname + "/success.html")
        } else {
            res.sendFile(__dirname + "/failure.html")
        }
    })

    request.write(jsonData)
    request.end()
})

app.post('/failure', function (req, res) {
    res.redirect('/')
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Server running at port 3000")
})

// API: 938d86e23e3a124d0935346072ab44e6-us19
// List ID: f33633632d
