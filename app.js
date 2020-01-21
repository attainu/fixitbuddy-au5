var express = require("express")
var hbs = require("hbs")
var bodyParser = require("body-parser")
var multiparty = require("multiparty")
const mongodb = require("mongodb")
var session = require("express-session")
var cloudinary = require("cloudinary")
const nodemailer = require("nodemailer");
const mongoose = require("mongoose")

var app = express()

app.use(express.static("public"))
app.use(express.static("uploads"))

app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret: "qwerty",
    cookie: {
        maxAge: 1000 * 100 * 60,
        httpOnly: true,
        path: "/"
    }

}))

var url = "mongodb+srv://kshitij7:12345@cluster0-6awrx.mongodb.net/fixitbuddy?retryWrites=true&w=majority"
var DB = ""

mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// mongodb.MongoClient.connect(url, function (err, client) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Atlas Connected")
//         DB = client.db("fixitbuddy");
//     }
// })

// cloudinary.config({
//     cloud_name: "blues1905",
//     api_key: "642721642791148",
//     api_secret: "u-yjKxbeck9WFW7Z4QJeegx77Io"
// })

// var email = []
// console.log(email)


const service = require("./controller/service.js")

const home = require("./controller/home.js")

const user = require("./controller/user.js")

const admin = require("./controller/fixitadmin.js")


app.get("/", home.Controller.home)

app.get("/aboutus", home.Controller.aboutus)

app.get("/service", service.Controller.service)

app.get("/signuplogin", user.Controller.signuplogin )


app.post("/usersignup", user.Controller.usersignup)

app.post("/otp", user.Controller.otp)

app.post("/userlogin", user.Controller.userlogin)

app.post("/bookedService", user.Controller.bookedService)

// app.use(user.Controller.middle)

app.get("/profile", user.Controller.profile)

app.post("/updateAddress", user.Controller.updateAddress)

app.post("/updateuserinfo", user.Controller.updateuserinfo)

// app.post("/delete", user.Controller.delete)

app.get("/logout", user.Controller.logout)

/////////////////////////////Admin Routes///////////////////////////

app.get("/adminpanel",admin.Controller.adminpanel)

app.post("/adminlogin",admin.Controller.adminlogin)

app.get("/admin", admin.Controller.admin)

app.get("/adminlogout", admin.Controller.adminlogout)

// app.get("/user-signin", function(req, res){
//     res.render("signup",{

//     });
// })
    
// app.get('/dashboard',function(req,res){
//     res.render('dashboard')
// });
    
// app.get('/employee',function(req,res){
//     res.render('employee')
// });
    
// app.get('/orderapproval',function(req,res){
//     res.render('orderapproval')
// });
    
// app.get('/information',function(req,res){
//     res.render('information')
// });

// //------------admin--------------//

// var adminSchema = require("./models/addAdmin.js");


// var admin = require("./controller/adminCRUD.js")

// app.get("/create",admin.addAdmin.create);
// app.post("/create_admin",admin.addAdmin.create_admin)
// app.get("/read_admin",admin.addAdmin.read_admin)
// app.get("/adminprofile",admin.addAdmin.adminprofile)

// app.get("/logout",admin.addAdmin.logout)

// //-----------------employee-------------//

// var employeeSchema = require("./models/addemployee.js");


// var employees = require("./controller/emplyCRUD.js")

// app.get("/create_details", employees.Employee.create_details);

// app.get("/read-employee", employees.Employee.read_employee);

// app.get("/update/:_id", employees.Employee.create_employee);

// app.post("/create",employees.Employee.create)
// app.get("/delete_employee/:_id", employees.Employee.delete_employee);



app.listen(4000);