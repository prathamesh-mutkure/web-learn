const express = require('express');

const app = express()

function sayHello1(req, res, next) {
    console.log('Hello World 1')
    next()
}

function sayHello2(req, res, next) {
    console.log('Hello World 2')
    next()
}

function sayHello3(req, res, next) {
    console.log('Hello World 3')
    next()
}

app.get('/', sayHello1, sayHello2, sayHello3, (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server running at port 3000')
})
