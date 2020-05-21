const Posts = require("../models/posts");

const postsQueries = {};

//get All posts
postsQueries.findAllBlogs = () => {
  return Posts.find();
};

// Create and Save a new post
postsQueries.create = ({ title, img, description }) => {
  return Posts.create({ title, img, description });
};

//Find a single post with an id
postsQueries.findOne = (id) => {
  return Posts.findById({ id });
};

//Find a post by title
postsQueries.findOne = (title) => {
  return Posts.findOne({ title });
};
// Update a post by the id in the request
postsQueries.update = (req, res) => {
  return Posts.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
};

// Delete a post with the specified id in the request
postsQueries.delete = (id) => {
  return Posts.findByIdAndRemove({ id });
};

module.exports = postsQueries;
