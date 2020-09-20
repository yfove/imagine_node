const express = require("express"),
  bodyParser = require("body-parser"),
  expressLayouts = require("express-ejs-layouts"),
  indexRouter = require("./routes/index"),
  blogRouter = require("./routes/blogs");

(mongoose = require("mongoose")), (app = express());

// Setting up the app
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/blogs", blogRouter);

app.listen(process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.render("index");
});
