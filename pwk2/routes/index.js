// const router = require("express").Router();
// const { contactName } = require("../controllers/contacts.controller.js");

// routes.get("/", (req, res) => {
//   res.send("Barbara Wilson");
// });

const router = require("express").Router();

router.use("/contacts", require("./contacts"));

module.exports = router;
