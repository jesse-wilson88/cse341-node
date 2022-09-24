const routes = require("express").Router();
const { contactName } = require("../controllers/contacts.controller.js");

// routes.get("/", (req, res) => {
//   res.send("Barbara Wilson");
// });

routes.get("/", contactName);

module.exports = routes;
