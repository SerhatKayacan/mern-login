const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const userSchema = new Schema({
  Profilim:{
    username: { type: String , unique:true},
    password: { type: String},
    telefon:{type:Number},
    eposta:{type:String},
    vergiDairesi:{type:String},
    vergiNo:{type:Number},
    adres:{type:String}
  }
});

module.exports = User = mongoose.model("User", userSchema);