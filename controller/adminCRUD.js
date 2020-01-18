const addAdmin ={}
var Admin = require("../models/addAdmin.js");

Admin.create_admin = function(req,res){
    var data = {
        adminid:req.body.id,
        firstName:req.body.firstName,
        lastName:req.body.lastname,
        fullName:req.body.fullName,
        gender:req.body.gender,
        mobile :req.body.mobile,
        email:req.body.email,
        password:req.body.password,
    }
    addAdmin.create(data, function(err, admin){
        if(err)
            res.redirect("/Admin")
        else
            res.redirect("/user-signin");
    });
}

//--------------read for admin--------------------//
Admin.read_admin = function(req, res){
    let id = req.params._id;
    addAdmin.findOne( function(err, admin) {
        if (admin == null){
            res.redirect("/Admin")
        }
        else{
            if(req.body.password == result.password){
                req.session.user = {email: req.body.email}
                res.redirect("/dashboard")
            }
        }
 
    });
}

//-----------Update for admin---------------------//
Admin.update_admin = function(req,res){
    var data = {
        newPassword = req.body.newPassword,
        confirmPassword = req.body.confirmPassword
    }
    
    addAdmin.updateOne({email: req.session.user.email}, {$set: data}, function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.redirect("/adminprofile")
        }
    })
   
}

//---------------DELETE for admin--------------------//
addAdmin.delete_admin = function(req,res){
      
    var postsIDs = req.params._id
    Admin.deleteMany({ _id: { $in:postsIDs }},(err, doc) => {

        if (!err) {

            res.redirect('/read_admin');

        }

        

    });


}

addAdmin.adminprofile=function(req,res){
    if(req.session.user){
        res.render("adminprofile",{
            Admin:req.session.user
        })
    }
}



module.exports = {
    addAdmin:addAdmin
};


