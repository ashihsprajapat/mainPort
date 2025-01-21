const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require('method-override');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, ("views")))
app.use(express.urlencoded({ extended: true }));//middlewares
app.use(methodOverride('_method'));//middlewares
app.use(express.static(path.join(__dirname, "public")));//middlewares
app.listen(port, () => {
    console.log("App is listening on port ", port);
})
app.get("/", (req, res) => {
    res.render("./layout/boilerplate.ejs")
})
const project=require("./routes/project");
app.use("/projects",project);
const contect=require("./routes/contect");
app.use("/contect",contect);
