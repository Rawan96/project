const app = require("./app");

const port = app.get("port");

app.listen(port, () => {
  console.log(`You are listening to the port: http://localhost:${port}`);
});
