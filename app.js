const express = require("express"),
      bodyParser = require("body-parser"),
      app = express();


// Setting up the app
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
  console.log("server is good");
});

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blog", (req, res) => {
  res.render("blog");
})

app.get("/contactUs", (req, res) => {
  res.render("contactUs");
})

app.get("/edit", (req, res) => {
  res.render("edit");
})

app.get("/getInvolved", (req, res) => {
  res.render("getInvolved");
})

app.get("/indicators", (req, res) => {
  res.render("indicators");
})

app.get("/login", (req, res) => {
  res.render("login");
})

app.get("/new", (req, res) => {
  res.render("new");
})

app.get("/ourWork", (req, res) => {
  res.render("ourWork");
})

app.get("/values", (req, res) => {
  res.render("values");
})