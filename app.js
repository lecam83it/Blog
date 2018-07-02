var express = require('express');
var config = require('config');
var logger = require('morgan');
var bodyParser = require('body-parser');


// import moduls
var controllers = require('./apps/controllers');



var PORT = process.env.PORT || 3000;

var app = express();

//set morgan to log
app.use(logger('dev'));

//set middle-wares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
// set views engine
app.set('/views', express.static(__dirname + '/asdsadsapps/views'));
app.set('view engine', 'ejs');
//use assets
app.use('/public', express.static(__dirname + '/public'));

//use router
app.use(controllers);

// listen Server

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
})