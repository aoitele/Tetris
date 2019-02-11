const express = require("express");
const app = express();
app.use(express.static("static"));
const fs = require("fs");
const path = require("path");
const htmlPath = path.join(__dirname, "./static/index.html");
innerhtml = fs.readFileSync(htmlPath, "utf8");

app.get("/", (req, res) => {
  console.log("YES!!!");
});

app.get("/backend", (req, res) => {});

app.listen(8000);
