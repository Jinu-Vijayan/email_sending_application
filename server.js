const express = require("express");
require("dotenv").config();
const MailDev = require("maildev");
const { MailRouter } = require("./routes/SendMail.Route");
const path = require("path");

const PORT = process.env.PORT || 10000;

const maildev = new MailDev();
maildev.listen(()=>{
    console.log("We can sent emails to port 1025")
})

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,"frontEnd")));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"fontEnd","index.html"))
})

app.use(MailRouter);

app.use("/*",(req,res)=>{
    res.status(404).json({
        message : "Page not found"
    })
})

app.listen(PORT,()=>{
    console.log("Server up and running at port", PORT);
})