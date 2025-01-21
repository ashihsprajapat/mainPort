const express = require("express");
const methodOverride = require('method-override');
const { route } = require("./project");
const router=express.Router();
router.get("/",(req,res)=>{
    res.render("listing/Contect.ejs")
});

module.exports=router;