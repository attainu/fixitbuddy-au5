var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('hbs')
var mongodb = require('mongodb')
var multiparty = require('multiparty')
var session = require('express-session')

var app = express()
app.use(express.static('public'))
app.use(express.static('uploads'))

app.use(bodyParser.urlencoded({
    extended: false
}))

app.set('view engine', 'hbs')

var url = 'mongodb://localhost:27017'
var dbname = 'fixitbuddy'
var DB = ''
mongodb.MongoClient.connect(url, function (err, client) {
    if (err) {
        console.log('Failed to connect to mongodb. Error:', err)
    }
    else {
        DB = client.db(dbname)
    }
})

app.use(session({
    secret: 'qwertyuiop',
    cookie: {
        maxAge: 1000 * 60 * 60,
        path: '/',
        httpOnly: true

    }
}));

app.get('/',function(req,res){
    res.render('dashboard')
});

app.get('/dashboard',function(req,res){
    res.render('dashboard')
});

app.get('/employee',function(req,res){
    res.render('employee')
});

app.get('/orderapproval',function(req,res){
    res.render('orderapproval')
});

app.get('/information',function(req,res){
    res.render('information')
});

app.listen(3000);