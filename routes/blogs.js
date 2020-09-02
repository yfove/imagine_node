const express = require("express");
const router = express.Router();

// All blogs route
router.get("/", (req, res) => {
  res.render("blogs/blog");
});

// New Blogs Route
router.get("/new", (req, res) => {
  res.render("blogs/new");
});

// Create Blogs route
router.post("/", (req, res) => {
  res.redirect("/blogs");
});

module.exports = router;
