const Post = require("../../database/models/posts");

//get all the posts
const getAllPosts = (req, res) => {
  post
    .find()
    .then((posts) => {
      if (!posts) return res.status(200).send({ message: "There is no posts" });
      else res.status(200).send(posts);
    })

    .catch((err) => {
      res.status(500).send({ message: "Error finding post with id=" + id });
    });
};

// Create and save a post in the database
const createPost = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a post
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    img: req.body.img,
  });

  // Save post in the database
  post
    .save(post)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the post.",
      });
    });
};

// find one post by id
const findOnePost = (req, res) => {
  const id = req.params.id;

  Post.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found post with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error finding post with id=" + id });
    });
};

//Update a post by the id
const updatePost = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data that you want to update can not be empty!",
    });
  }

  const id = req.params.id;

  Post.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Post with id=${id}. Maybe Post was not found!`,
        });
      } else res.send({ message: "Post was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Post with id=" + id,
      });
    });
};

// Delete a post by specific id in the request
const deletePost = (req, res) => {
  const id = req.params.id;

  Post.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Post with id=${id}. Maybe Post was not found!`,
        });
      } else {
        res.send({
          message: "Post was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Post with id=" + id,
      });
    });
};

// find a post by title
const getPostsByTitle = (req, res) => {
  const title = req.params.title;

  Post.findOne(title)
    .then((data) => {
      if (!data) {
        res.status(200).send({ message: "There is no result" });
      } else {
        res.send(data);
      }
    })

    .catch((err) => {
      res.status(500).send({
        message: "Couldn't find a blog with this name",
      });
    });
};

module.exports = {
  createPost,
  findOnePost,
  deletePost,
  updatePost,
  getPostsByTitle,
  getAllPosts,
};
