const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const router = require("./routes");

/*const corsOptions = {
  origin: "http://localhost:4001",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/posts", router);

module.exports = app;
