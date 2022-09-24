const express = require("express");
const router = express.router();
// const router = require("express").Router();
// const { contactName } = require("../controllers/contacts.controller.js");

// routes.get("/", (req, res) => {
//   res.send("Barbara Wilson");
// });

router.use("/contacts", require("./contacts"));

module.exports = router;
