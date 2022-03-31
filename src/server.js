const express = require("express");
const bodyParser = require("body-parser")

const {User} = require("./app/models");

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

User.create({
    name:"matheus",
    email:"mat.feijo@gmail.com",
    telefone:"(65)990000009",
    password:"123456"
});

app.listen(3333)