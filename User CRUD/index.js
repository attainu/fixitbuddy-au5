var express = require("express");
var bodyParser=require("body-parser")
var hbs = require("hbs")
var app = express();

app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const mongodb = require('mongodb');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/addemployee', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected successfully!!")
});