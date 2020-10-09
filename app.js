const express = require("express")
const multer = require('multer')
const bodyParser = require("body-parser")
const expressLayouts = require("express-ejs-layouts")
const indexRouter = require("./routes/index")
const blogRouter = require("./routes/blogs")
const mongoose = require("mongoose")
const app = express();

// Setting up the app
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public/images/', express.static('./public/images'));
// app.use(express.static("public"));

// Using out routers
app.use("/", indexRouter);
app.use("/blogs", blogRouter);

app.listen(process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.render("index", { text: "hello" });
});
