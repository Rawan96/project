const app = require("./app");
const connection = require("./database/connection");

const PORT = 4000;

app.listen(PORT, () =>
  console.log(`You are listening to the port: http://localhost:${PORT}`)
);
