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

module.exports = router;
