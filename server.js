const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");
const router = require("./routes");

const port = process.env.PORT || 8080;
const app = express();
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

// router.use("//api-docs", swaggerUi.server, swaggerUi.setup(swaggerDocument));
// router.get("/api-docs", swaggerUi.setup(swaggerDocument));

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control.Allow-Headers",
      "Origin, X-Requested-With, Content-Type. Accept, Z-Key"
    );
    res.setHeader("Content-Type", "application/json");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    next();
  })
  .use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
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
