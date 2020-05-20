const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { join } = require("path");

const app = express();

const router = require("./routes");
const { client, server } = require("./controller");

app.use(express.json());
app.use(bodyParser.json({ extended: false }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "..", "client", "build")));

app.use("/api/posts", router);

app.use(client);
app.use(server);

module.exports = app;
