//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const date = require(__dirname + '/date.js')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static('public'))

const items = ['Buy Food', 'Cook Food', 'Eat Food']
const workList = []

app.get('/', (req, res) => {
    res.redirect('/ ')
})

app.get('/:list', (req, res) => {

    if (req.params.list === 'work') {
        var listTitle = req.params.list
        var list = workList
    } else {
        listTitle = date.getDate()
        list = items
    }

    res.render('list', {
        listTitle: listTitle,
        items: list
    })
})

app.post('/', (req, res) => {

    const item = req.body.newItem
    const listTitle = req.body.listTitle

    if (listTitle === 'work') {
        if (item.trim() !== '')
            workList.push(item)
        res.redirect('/work')
    } else {
        if (item.trim() !== '')
            items.push(item)
        res.redirect('/')
    }
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(3000, function () {
    console.log("Server running at port 3000")
})
