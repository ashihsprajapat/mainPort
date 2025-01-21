const express = require("express");
const methodOverride = require('method-override');
const router=express.Router();


router.get("/",(req,res)=>{
   
    res.render("./listing/project")
});

module.exports=router;