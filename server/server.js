const express = require("express");
const app = express();

app.use(express.static("build")); // build 폴더 쓸수있게 허락

app.get("/", function (req, res) {
  // res.send("Hello World!!");
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(3000, () => {
  console.log("Server is Running");
});
