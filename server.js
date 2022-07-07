//setting up the server
//instances of required modules created
const express = require('express');
const morgan = require('morgan');//middleware to log HTTP requests and errors in a better way
const mongoose = require('mongoose');

//creating an instance of the server
const app = express();

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
    
})