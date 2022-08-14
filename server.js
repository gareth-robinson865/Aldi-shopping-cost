//setting up the server
//instances of required modules created
const express = require('express');
const morgan = require('morgan');//middleware to log HTTP requests and errors in a better way
require('dotenv').config(); //tells the server to load anything in a file called dotenv into an environment variable
const mongoose = require('mongoose');
const foodRoutes = require('./routes/foodRoutes');
const Food = require('../nodeFood/models/food');

//creating an instance of the server
const app = express();

//connect to mongoDB
const dbURI = process.env.DBURI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen('3000'))//only listen for requests once connection to the db has been made
    .catch((err) => console.log(err));

//setting the view engine to ejs for the views
app.set('view engine', 'ejs');

//middleware
//make a public folder so that i can use style sheets and images
app.use(express.static('public'));

//parses the information sent in a request URL into an object so we can use that information on the request object
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));//set to take in and log the URL, declare a status and give the response time in millisecond

//making req.path available to the template engine (by putting that value into res.locals.path so that it can be used in rendering the page
//res.locals starts out each request as empty so it contains nothing until your middleware or request handlers puts something in it for purposes of rendering a page for that specific request.
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

//Routes
app.get('/', (req, res) => {
    res.redirect('/food');
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'about'})
})

app.get('/create', (req, res) => {
    res.render('create', { title: 'create food' })
})

/*app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    Food.findById(id)
        .then(result => {
            res.render('details', { food: result, title: 'Food details' });
        })
        .catch((err) => {
            console.log(err)
        });
})*///!commented to test if could work in route controller file



app.use('/food', foodRoutes)

app.use((req, res) => {
    res.status(404).render('404', { title: 'error' });
})