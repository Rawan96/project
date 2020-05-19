const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hiiiiiiiii");
});

app.set("port", process.env.PORT || 4000);

module.exports = app;
