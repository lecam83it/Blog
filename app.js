var express = require('express');
var config = require('config');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// import moduls
var controllers = require('./apps/controllers');
//connect mongoDB in mLab.com
const dbURL = config.get('mongoDB.url');
mongoose.connect(dbURL)
.then(() => {
    console.log("Mongo server is connected!");
}).catch((err) => {
    console.log("Error!");
    console.log(err);
});

var PORT = process.env.PORT || 3000;

var app = express();

//set morgan to log
app.use(logger('dev'));

//set middle-wares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// set views engine
app.set('views', (__dirname + '/apps/views'));
app.set('view engine', 'ejs');
//use assets
app.use('/public', express.static(__dirname + '/public'));

//use router
app.use(controllers);

// listen Server

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
})