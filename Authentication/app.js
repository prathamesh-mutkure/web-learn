
/* AUTHENTICATION LEVELS 

    1. Username and Password
    2. Database Encryption
    3. Hashing
    4. Hashing and Salting
    5. Cookies and Sessions
    6. OAuth 2.0

*/

require('dotenv').config()                          // Enviornment Variables
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const encrypt = require('mongoose-encryption')      // Encryption
const md5 = require('md5')                          // Hashing
const bcrypt = require('bcrypt')                    // Salting

// Cokkies and Sessions
const session = require('express-session')
const passport = require('passport')
const passportLocalMongoose = require('passport-local-mongoose')

// Google OAuth 2.0
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate')

const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

// Connecting to DB
mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true })

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    googleId: String,
    secret: String
})

userSchema.plugin(passportLocalMongoose)
userSchema.plugin(findOrCreate)

const User = mongoose.model('user', userSchema)

passport.use(User.createStrategy())

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/secrets',
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
},

    (accessToken, refreshToken, profile, cb) => {
        User.findOrCreate({ googleId: profile.id }, (err, user) => {
            return cb(err, user);
        });
    }
));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/secrets',
    passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/secrets' }),
);

app.get('/secrets', (req, res) => {

    User.find({}, (err, users) => {
        if (err) {
            console.log(err)
        } else {
            res.render('secrets', { users: users })
        }
    })
})

app.get('/submit', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('submit')
    } else {
        res.redirect('/login')
    }
})

app.post('/submit', (req, res) => {

    if (req.isAuthenticated()) {

        User.findById(req.user._id, (err, user) => {

            if (err) {
                console.log(err)
            } else {

                user.secret = req.body.secret
                user.save((err) => {

                    if (err) {
                        console.log(err)
                    } else {
                        res.redirect('/secrets')
                    }
                })
            }
        })
    } else {
        res.redirect('/login')
    }
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/login', (req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password
    })

    req.login(user, err => {
        if (err) {
            console.log(err)
        } else {
            passport.authenticate('local', { successRedirect: '/secrets', failureRedirect: '/login' })
        }
    })
})

app.post('/register', (req, res) => {

    const username = req.body.username
    const password = req.body.password

    User.register({ username: username }, password, (err, user) => {

        if (err) {
            console.log(err)
            res.redirect('/register')
        } else {
            passport.authenticate('local', { successRedirect: '/secrets', failureRedirect: '/register' })
        }
    })
})

app.listen(3000, () => {
    console.log('Server running at port 3000')
})
