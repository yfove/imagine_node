const express = require("express");
const Blog = require('./../models/Blog')
const router = express.Router();

// All blogs route
router.get("/", (req, res) => {
  res.render("blogs/list");
});

// New Blogs Route
router.get("/new", (req, res) => {
  res.render("blogs/new", { blog: new Blog() })
});

router.get('/:slug', async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug })
  // res.send(req.params.id)
  if (blog == null) res.redirect('/blogs')
  res.render('blogs/show', { blog: blog })
})

router.post('/', async (req, res) => {
  let blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
  })
  try {
    blog = await blog.save()
    res.redirect(`/blogs/${blog.slug}`)
  } catch (e) {
    console.log(e)
    res.render('blogs/new', { blog: blog })
  }
})

router.delete('/:id', async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id)
  res.redirect('/blogs')
})

module.exports = router;
