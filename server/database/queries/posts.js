const Posts = require("../models/posts");

const postsQueries = {};

// Create and Save a new post
postsQueries.create = ({ title, img, description }) => {
  return Posts.create({ title, img, description });
};

//Find a single post with an id
postsQueries.findOne = (id) => {
  return Posts.findById(id);
};

// Update a post by the id in the request
postsQueries.update = (req, res) => {
  return Posts.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
};

// Delete a post with the specified id in the request
postsQueries.delete = (id) => {
  return Posts.findByIdAndRemove(id);
};

module.exports = postsQueries;
