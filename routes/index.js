const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Barbara Wilson");
});

module.exports = routes;
