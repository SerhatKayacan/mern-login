const express = require("express");
const router = express.Router();

const User = require("../../models/User");

router.post("/",(req,res)=>{
  User.findOne({username:req.body.username}).then(user => res.json(user)).catch(err=>{res.send(err)}); 
});
router.post("/update",(req,res)=>{
  User.findByIdAndUpdate({_id:req.body.id},req.body).then(()=>res.send("success"));
})
router.post("/save",(req,res)=>{
 
    const newUser= new User({
      Profilim:{
        username:req.body.username,
        password:req.body.password,
        telefon:req.body.telefon,
        eposta:req.body.eposta,
        vergiDairesi:req.body.vergiDairesi,
        vergiNo:req.body.vergiNo,
        adres:req.body.adres
      }  
    });
    newUser.save().then(user => res.json(user)).catch(err=>{res.send(err)}); 
})

module.exports=router;