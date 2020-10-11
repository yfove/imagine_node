const express = require("express");
const { restart } = require("nodemon");
const Blog = require('./../models/Blog')
const router = express.Router();

// All blogs route
router.get("/", (req, res) => {
  res.render("blogs/blog");
});

// route for post id
router.get('/:id', (req, res) => {
  res.send(req.params.id)
})

// New Blogs Route
router.get("/new", (req, res) => {
  res.render("blogs/new", { blog: new Blog() })
});

// Create Blogs route
router.post("/", async (req, res) => {
  let blog = new Blog({
    // we nee to tell express how to access these posts in our server
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
  })

  try {
    blog = await blog.save()
    res.redirect(`/blogs/$(blog.id)`)
  } catch (e) {
    console.log(e)
    res.render('blogs/new', { blog: Blog })
  }

});

module.exports = router;
