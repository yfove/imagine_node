const mongoose = require("mongoose")
const marked = require('marked')
const slugify = require('slugify')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // image: {
  //   type: String,
  // },
  description: {
    type: String,
    required: true,
  },
  markdown: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model("Blog", blogSchema);
// here we pass in the name of the model and pass the into the scheme
