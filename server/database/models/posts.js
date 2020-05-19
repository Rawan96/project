const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: {
    type: "String",
    required: true,
  },
  img: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
    required: true,
  },
});

const Post = model("Post", postSchema);
module.exports = Post;
