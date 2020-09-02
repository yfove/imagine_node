const express = require("express");
const router = express.Router();

// All blogs route
router.get("/", (req, res) => {
  res.render("blogs/blog");
});

// New Blogs Route
// router.get("/new", (req, res) => {
//   // res.render("blogs/new", { blog: new Blog() });
// });

// Create Blogs route
router.post("/", (req, res) => {
  res.send("Create");
});

module.exports = router;
