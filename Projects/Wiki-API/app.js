
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const mongoose = require('mongoose')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

// Connecting to mongoDB WikiDB
mongoose.connect('mongodb://localhost:27017/wikiDB', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) {
        console.log('Connected to MongoDB successfully')
    }
})

const articleSchema = mongoose.Schema({
    title: String,
    content: String
})

const Article = mongoose.model('article', articleSchema)

// Home route
app.get('/', (req, res) => {
    res.send('Hello Wiki')
})

/* Request targetting all articles */
app.route('/articles')

    /* Get all articles */
    .get((req, res) => {

        Article.find({}, (err, articles) => {

            if (!err) {
                res.send(articles)
            } else {
                res.send('Error getting the articles: ' + err)
            }
        })
    })

    /* Insert a new Article */
    .post((req, res) => {

        const article = new Article({
            title: req.body.title,
            content: req.body.content
        })

        article.save( err => {
            if (err) {
                res.send('Could not save the article: ' + err)
            } else {
                res.send('Successfully saved the article')
            }
        })
    })

    /* Delete all Articles */
    .delete((req, res) => {

        Article.deleteMany({}, err => {
            if (err) {
                res.send('Could not delete articles')
            } else {
                res.send('Deleted all the articles')
            }
        })
    })

/* Request targetting a specific article */
app.route('/articles/:articleName')

    /* Get article by its name */
    .get((req, res) => {

        Article.findOne({ title: req.params.articleName }, (err, article) => {

            if (err) {
                res.send('Could not find the requested article')
            } else {
                res.send(article)
            }
        })
    })

    /* Delete articles by its name */
    .delete((req, res) => {

        Article.deleteOne({ title: req.params.articleName }, err => {

            if (err) {
                res.send('Could not delete the requested article')
            } else {
                res.send('Succesfully deleted the request article')
            }
        })
    })

    .put((req, res) => {

        Article.updateOne(
            {title: req.params.articleName},
            {title: req.body.title, content: req.body.content},
            {overwrite: true},
            err => {
                if (err) {
                    res.send('Could not update the article.')
                } else {
                    res.send('Succesfully updated the artice.')
                }
            }
        )
    })

    .patch((req, res) => {

        Article.updateOne(
            {title: req.params.titleName},
            {$set: req.body},
            err => {
                if (err) {
                    res.send('Could not update the article.')
                } else {
                    res.send('Succesfully updated the artice.')
                }
            }
        )
    })

app.listen(3000, () => {
    console.log('Server running at port 3000')
})
