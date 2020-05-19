const express = require("express");
const cors = require("cors");

const app = express();

/*const corsOptions = {
  origin: "http://localhost:4001",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hiiiiiiiii");
});

app.set("port", process.env.PORT || 4000);

module.exports = app;
