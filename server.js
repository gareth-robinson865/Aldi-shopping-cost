//instances of required modules created
const express = require('express');
const morgan = require('morgan');//middleware to log HTTP requests and errors in a better way
const mongoose = require('mongoose');

//creating an instance of the server
const app = express();

//setting the view engine to ejs for the views
app.set('view engine', 'ejs');

//make a public folder so that i can use style sheets and images
app.use(express.static('public'));

//parses the information sent in a request URL into an object so we can use that information on the request object
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));//set to take in and log the URL, declare a status and give the response time in millisecond
