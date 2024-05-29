const express = require("express");
const {SendMail} = require("../controller/SendMail.Controller")

const MailRouter = express.Router();

MailRouter.post("/sendMail",SendMail);

module.exports = {MailRouter};