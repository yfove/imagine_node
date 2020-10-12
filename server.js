const express = require("express")
const multer = require('multer')
const bodyParser = require("body-parser")
const expressLayouts = require("express-ejs-layouts")
const indexRouter = require("./routes/index")
const blogRouter = require("./routes/blogs")
const mongoose = require("mongoose")
const app = express();

mongoose.connect('mongodb://localhost/imagine_node', {
  useNewUrlParser: true, useUnifiedTopology: true
})

// Setting up the app
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
// allow access to everything on form
app.use(express.urlencoded({ extended: false }))
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public/images/', express.static('./public/images'));

// Using out routers
app.use("/", indexRouter);
app.use("/blogs", blogRouter);

app.listen(process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.render("index", { text: "hello" });
});
