//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const mongoose = require('mongoose')
const _ = require('lodash')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static('public'))

// Connect to DB
const password = ' '
const url = 'mongodb+srv://admin:' + password + '@clusterN-XXXXX.mongodb.net/todoListDB'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

// Creating schema and model for list items
const itemsSchema = mongoose.Schema({
    name: String
})

const Item = mongoose.model('Item', itemsSchema)

// Default items in a new list
const item1 = Item({ name: "Welcome to your Todo List" })
const item2 = Item({ name: "Click the + button to add an Item to Todo List" })
const item3 = Item({ name: "<-- Click this checkbox to delete Item" })

const defaultItems = [item1, item2, item3]

// Inserting default item into DB if list is empty
Item.find({}, (err, ListItems) => {

    if (ListItems.length === 0) {
        Item.insertMany(defaultItems, (err) => {

            if (err) {
                console.log(err)
            } else {
                console.log('Successfully saved default items to the Database')
            }
        })
    }
})

// Custom List Schema and model

const listSchema = mongoose.Schema({
    name: String,
    list: [itemsSchema]
})

const List = new mongoose.model('list', listSchema)

app.get('/', (req, res) => {

    Item.find({}, (err, ListItems) => {
        res.render('list', {
            listTitle: 'Today',
            items: ListItems
        })
    })
})

app.get('/:customListName', (req, res) => {

    const customListName = _.lowerCase(req.params.customListName)

    List.findOne({ name: customListName }, (err, list) => {

        if (!err) {

            if (!list) {

                const newlist = new List({
                    name: customListName,
                    list: defaultItems
                })

                newlist.save()
                res.redirect('/' + customListName)

            } else {

                res.render('list', {
                    listTitle: customListName,
                    items: list.list
                })
            }
        } else {
            console.log('Error creating list: ' + customListName)
        }
    })
})

app.post('/', (req, res) => {

    const listTitle = req.body.listTitle
    const newItemName = req.body.newItem

    // Checking empty item
    if (newItemName.trim() === '') {
        res.redirect('/' + listTitle)
        return
    }

    const newItem = new Item({ name: newItemName })

    if (listTitle === 'Today') {
        newItem.save()
        res.redirect('/')
    }
    else {
        List.findOne({ name: listTitle }, (err, list) => {
            if (err) {
                console.log('Could not add item to list: ' + listTitle)
                console.log(err)
            }

            list.list.push(newItem)
            list.save()
            res.redirect('/' + listTitle)
        })
    }
})

app.post('/delete', (req, res) => {

    const listTitle = req.body.listTitle
    const itemID = req.body.checkbox

    if (listTitle === 'Today') {
        Item.findByIdAndRemove(itemID, (err) => {
            if (err) {
                console.log('Could not delete the Item with ID: ' + itemID)
            }
        })

        res.redirect('/')
    } else {
        List.findOneAndUpdate({ name: listTitle }, { $pull: { list: { _id: itemID } } }, (err) => {
            if (err) {
                console.log('Could not delete the Item with ID: ' + itemID)
            }
        })

        res.redirect('/' + listTitle)
    }
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(3000, function () {
    console.log("Server running at port 3000")
})
