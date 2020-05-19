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

  author: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  authorName: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Posts = model("posts", postSchema);
module.exports = Posts;
