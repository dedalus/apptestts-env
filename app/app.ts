import express = require("express");

const app: express.Application = express();

app.get("/", (req, res) => {
  res.send("Hello World! Michael");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!!!!A");
});
