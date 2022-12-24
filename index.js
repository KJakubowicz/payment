const express = require("express");
const app = express();
const config = require("./config");
const apiRouter = require("./routes/api");
const bodyParser = require("body-parser");

// parsers
// Content-type: application/json
app.use(bodyParser.json());

// routes
app.use("/api/v1/", apiRouter);

//server
app.listen(config.port, function () {
    console.log("serwer słucha....");
});
