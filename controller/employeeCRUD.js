const Employee ={}
var addemployee = require("../models/addemployee.js");

//---------------POST for add employee-----------//

Employee.create_employee = function(req,res){
    new addemployee({
                   emplyid:req.body.id,
                   firstname:req.body.firstname,
                   lastname:req.body.lastname,
                   department:req.body.department,
                   title:req.body.title,
                   mobile:req.body.mobile,
                   email:req.body.email,
                   address:req.body.address,
                   state:req.body.state,
                   nationality:req.body.nationality,
                   experience:req.body.experience,
                   Hdate:req.body.Hdate,
                   Bdate:req.body.Bdate
    })
   
    addemployee.find(function(err, employees) {
        if (err)
            res.send(err)
        res.json(employees);
    });
}

//----------------GET for employee-------------//


Employee.read_employee = function(req,res){
let id = req.params._id;
    addemployee.findById(id, function(err, employees) {
        if (err)
            res.send(err)
 
        res.json(employees);
    });
}
 

//----------------UPDATE for employee------------//

Employee.update_employee = function(req,res){
    var conditions ={_id:req.params._id}
    
    addemployee.update(conditions , req.body)
    .then(doc =>{
        if(!doc) {
            return  res.status(404).end();}
            return res.status(200).json(doc)
        })
        .catch(err => next(err));
        
}

//--------------DELETE for employee---------//


Employee.delete_employee = function(req,res){
    console.log(req.params._id);
    let id = req.params._id;
    addemployee.remove({
        _id : id
    }, function(err,result) {
        if (err)
            res.send(err);
        else
            res.json(result);	
    });
}

module.exports = {
    Employee:Employee
};