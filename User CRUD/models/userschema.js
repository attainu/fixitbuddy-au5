const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstname: { type:String },
    lastname: { type:String },
    gender: { type:String },
    address: { type:String },
    city: { type:String },
    state: { type:String },
    pincode: { type:Number, required:true },
    mobile: { type:Number },
    username: { type:String, required:true, unique:true },
    email: { type:String, unique:true, required:true },
    password: { type:String, required:true }
});

var User = mongoose.model('User',userSchema);

module.exports = User;