//instances of required modules created
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//creating an instance of the server
const app = express();

//setting the view engine to ejs for the views
app.set('view engine', 'ejs');

//make a public folder so that i can use style sheets and images
app.use(express.static('public'));

//allow the use of form data and to access the data sent in the request body. the extended part is to stop the depreciation error 
app.use(express.urlencoded({ extended: true }));