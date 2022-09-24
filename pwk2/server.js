const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");

const app = express();
const port = process.env.PORT || 3000;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    coneole.log(err);
  } else {
    app.listen(port);
    console.log(
      `Personal week 02: Connected to DB & listening on port ${port}`
    );
  }
});

// app.use("/", require("./routes"));

// app.listen(port, () => {
//   console.log(`Personal Week 02: Running on port ${port}.`);
// }
