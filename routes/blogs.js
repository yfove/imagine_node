const express = require("express");
const { restart } = require("nodemon");
const Blog = require('./../models/Blog')
const router = express.Router();

// All blogs route
router.get("/", (req, res) => {
  res.render("blogs/blog");
});

// New Blogs Route
router.get("/new", (req, res) => {
  res.render("blogs/new", { blog: new Blog() })
});

router.get('/:id', (req, res) => {
  res.send(req.params.id)
})

router.post('/', async (req, res) => {
  let blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
  })
  try {
    blog = await blog.save()
    res.redirect(`/blogs/${blog.id}`)
  } catch (e) {
    console.log(e)
    res.render('blogs/new', { blog: blog })
  }
})

module.exports = router;
