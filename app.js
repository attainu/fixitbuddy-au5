var express = require("express")
var hbs = require("hbs")
var bodyParser = require("body-parser")
var multiparty = require("multiparty")
const mongodb = require("mongodb")
var session = require("express-session")
var cloudinary = require("cloudinary")

var app = express()

app.use(express.static("public"))
app.use(express.static("uploads"))

app.set("view engine","hbs")
app.use(bodyParser.urlencoded({extended:false}))
app.use(session({
    secret: "qwerty",
    cookie:{
        maxAge: 1000*100,
        httpOnly: true,
        path: "/"
    }

})
)

var url = "mongodb://localhost:27017"
var DB = ""
var dbName= "fixit-buddy"

mongodb.MongoClient.connect(url,function(err,client){
    if(err){
        console.log(err)
    }
    else{
        DB = client.db(dbName)
    }
})

cloudinary.config({
    cloud_name: "blues1905",
    api_key: "642721642791148",
    api_secret: "u-yjKxbeck9WFW7Z4QJeegx77Io"
})

app.get("/",function (req,res) {
    DB.collection("services").find({}).toArray(function (err,result) {
        if(err){
            console.log(err)
        }
        else{
            var cleaning = result.filter(function (elem) {
                return elem.service=="cleaning"
            })
            var electricianPlumbing = result.filter(function (elem) {
                return elem.service=="electrician-plumbing"
            })
            var appliancesRepair = result.filter(function (elem) {
                return elem.service=="appliances-repair"
            })
            var fitnessYoga = result.filter(function (elem) {
                return elem.service=="fitness-yoga"
            })

            res.render("home",{
                cleaning: cleaning,
                electricianPlumbing: electricianPlumbing,
                appliancesRepair: appliancesRepair,
                fitnessYoga: fitnessYoga
            })
        }
    })
    
})

app.get("/bathroom-cleaning",function (req,res) {
    DB.collection("services").findOne({name:"Bathroom Deep Cleaning"},function (err,result) {
        if(err){
            console.log(err)
        }
        else{
            res.render("service",{
                service: result
            })
        }
        
    })
})

app.get("/carpet-cleaning",function (req,res) {
    DB.collection("services").findOne({name:"Carpet Cleaning"},function (err,result) {
        if(err){
            console.log(err)
        }
        else{
            res.render("service",{
                service: result
            })
        }
    })
})

app.get("/home-cleaning",function (req,res) {
    DB.collection("services").findOne({name:"Full Home Deep Cleaning"},function (err,result) {
        if(err){
            console.log(err)
        }
        else{
            res.render("service",{
                service: result
            })
        }
    })
})

app.get("/kitchen-cleaning",function (req,res) {
    DB.collection("services").findOne({name:"Kitchen Deep Cleaning"},function (err,result) {
        if(err){
            console.log(err)
        }
        else{
            res.render("service",{
                service: result
            })
        }
    })
})

app.get("/electricians",function (req,res) {
    DB.collection("services").findOne({name:"Electricians"},function (err,result) {
        if(err){
            console.log(err)
        }
        else{
            res.render("service",{
                service: result
            })
        }
    })
})

app.get("/plumbers",function (req,res) {
    DB.collection("services").findOne({name:"Plumbers"},function (err,result) {
        if(err){
            console.log(err)
        }
        else{
            res.render("service",{
                service: result
            })
        }
    })
})

app.get("/carpenters",function (req,res) {
    DB.collection("services").findOne({name:"Carpenters"},function (err,result) {
        if(err){
            console.log(err)
        }
        else{
            res.render("service",{
                service: result
            })
        }
    })
})

app.get("/woodwork",function (req,res) {
    DB.collection("services").findOne({name:"Woodwork and Furniture Making"},function (err,result) {
        if(err){
            console.log(err)
        }
        else{
            res.render("service",{
                service: result
            })
        }
    })
})

app.get("/ac-repair",function (req,res) {
    DB.collection("services").findOne({name:"AC Service and Repair"},function (err,result) {
        if(err){
            console.log(err)
        }
        else{
            res.render("service",{
                service: result
            })
        }
    })
})

app.get("/washing-machine",function (req,res) {
    DB.collection("services").findOne({name:"Washing Machine Service & Repair"},function (err,result) {
        if(err){
            console.log(err)
        }
        else{
            res.render("service",{
                service: result
            })
        }
    })
})

app.get("/refrigerator",function (req,res) {
    DB.collection("services").findOne({name:"Refrigerator Repair"},function (err,result) {
        if(err){
            console.log(err)
        }
        else{
            res.render("service",{
                service: result
            })
        }
    })
})

app.get("/geyser",function (req,res) {
    DB.collection("services").findOne({name:"Geyser Service and Repair"},function (err,result) {
        if(err){
            console.log(err)
        }
        else{
            res.render("service",{
                service: result
            })
        }
    })
})

app.get("/fitness",function (req,res) {
    DB.collection("services").findOne({name:"Fitness Trainer at Home"},function (err,result) {
        if(err){
            console.log(err)
        }
        else{
            res.render("service",{
                service: result
            })
        }
    })
})

app.get("/yoga",function (req,res) {
    DB.collection("services").findOne({name:"Yoga Trainer at Home"},function (err,result) {
        if(err){
            console.log(err)
        }
        else{
            res.render("service",{
                service: result
            })
        }
    })
})

app.get("/AboutUs",function(req,res){
    res.render("AboutUs")
})

app.get("/profile",function(req,res){
    res.render("profile")
})


app.get("/Admin", function(req, res){
    res.render("Admin",{

    });
    
});

app.get("/user-signin", function(req, res){
    res.render("signup",{

    });
    
    
});
app.listen(4000);