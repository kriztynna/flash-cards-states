var path = require('path');
var express = require('express');
var FlashCardModel = require('./models/flash-card-model');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var app = express(); // Create an express app!
module.exports = app; // Export it so it can be require('')'d

// The path of our public directory. ([ROOT]/public)
var publicPath = path.join(__dirname, '../public');
var bowerPath = path.join(__dirname,'../bower_components');

// The path of our index.html file. ([ROOT]/index.html)
var indexHtmlPath = path.join(__dirname, '../public/templates/index.html');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// http://nodejs.org/docs/latest/api/globals.html#globals_dirname
// for more information about __dirname

// http://nodejs.org/api/path.html#path_path_join_path1_path2
// for more information about path.join

// When our server gets a request and the url matches
// something in our public folder, serve up that file
// e.g. angular.js, style.css
app.use(express.static(publicPath));
app.use(express.static(bowerPath));

// If we're hitting our home page, serve up our index.html file!
app.get('/', function (req, res) {
    console.log('redirected');
    res.sendFile(indexHtmlPath);
});

app.use(function (req, res, next) {
	console.log('made it');
	next();
});

app.get('/cards', function (req, res) {

    var modelParams = {};

    if (req.query.category) {
    	modelParams.category = req.query.category;
    }

    FlashCardModel.find(modelParams, function (err, cards) {
        setTimeout(function () {
            res.send(cards);
        }, Math.random() * 1000);
    });

});

app.post('/cards', function(req, res){
    var newCard = new FlashCardModel(req.body);
    newCard.save().then(function(card){
        res.status(201).send(card);
    });
});

app.put('/cards/:id',function(req,res){
    console.log(req.params.id)
    FlashCardModel.findById(req.params.id)
        .then(function(foundCard){
            Object.keys(req.body).map(function(key){
                foundCard[key] = req.body[key];
            });
            return foundCard.save();
        })
        .then(function(updatedCard){
            res.status(201).send(updatedCard);
        });
 });

app.delete('/manageCard/:id/delete', function (req, res) {
    // console.log('deleted, but not really');
    FlashCardModel.remove({
            _id: req.params.id
        })
        .then(function (deletedCard) {
            console.log('Deleted card: ' + req.params.id);
            res.send();
        });
});
