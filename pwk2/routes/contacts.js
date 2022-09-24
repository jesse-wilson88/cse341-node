const express = require("express");
const router = express.router();

const contactController = require("../controllers/contacts");

router.get("/", contactController.getAll);

module.exports = router;
