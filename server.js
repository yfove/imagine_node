const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const indexRouter = require("./routes/index")
const blogRouter = require("./routes/blogs")
const mongoose = require("mongoose")
const Blog = require("./models/Blog")
const methodOverride = require('method-override')
const app = express();

mongoose.connect('mongodb://localhost/imagine_node', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

// Setting up the app
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
// allow access to everything on form
app.use(express.urlencoded({ extended: false }))
app.use(expressLayouts);
app.use(methodOverride('_method'))
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public/images/', express.static('./public/images'));


app.get("/blogs", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: 'desc' })
  res.render('blogs/list', { blogs: blogs })
});

// Using our routers
app.use("/", indexRouter);
app.use("/blogs", blogRouter);

app.listen(process.env.PORT || 3000);



