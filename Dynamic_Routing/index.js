const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));//form ka data handle kr payenge

app.use(express.static(path.join(__dirname, "public"))); //sari static file public me hai
app.set("view engine", "ejs");// handle kr payenge ejs ko

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/profile/:username", function (req, res) {
  
  res.send(`Welcome`,req.params.username);
});

app.get("/author/:username/:age", function (req, res) {
  
  res.send(`Welcome ${req.params.username} your age is ${req.params.age}`);
});
app.listen(3000, function () {
  console.log("its running");
});
