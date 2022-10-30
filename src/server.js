const express = require("express");
const handlebars = require('express-handlebars')
const morgan = require('morgan')

const app = express()
app.use("morgan",)
app.engine("handlebars", handlebars())
app.set('view engine','handlebars')
app.set('views', path.join(__dirname,"resource/views"))
const port = 3000

app.get("/",(req,res)=>res.send("title"))

app.listen(port , ()=>console.log("listen"))