if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express"),
  bodyParser = require("body-parser"),
  expressLayouts = require("express-ejs-layouts"),
  indexRouter = require("./routes/index"),
  mongoose = require("mongoose"),
  app = express();

const db = mongoose.connection;
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
db.on("error", (error) => console.error(error));
db.once("open", () => console.error("Connected to Mongoose"));

// Setting up the app
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.get("/contactUs", (req, res) => {
  res.render("contactUs");
});

app.get("/edit", (req, res) => {
  res.render("edit");
});

app.get("/getInvolved", (req, res) => {
  res.render("getInvolved");
});

app.get("/indicators", (req, res) => {
  res.render("indicators");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.get("/ourWork", (req, res) => {
  res.render("ourWork");
});

app.get("/values", (req, res) => {
  res.render("values");
});
