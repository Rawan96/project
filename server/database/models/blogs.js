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
  content: {
    type: "String",
    required: true,
  },
  cuid: {
    type: "String",
    required: true,
  },
  dateAdded: {
    type: "Date",
    default: Date.now,
    required: true,
  },
});

const Posts = model("Posts", postSchema);
module.exports = Posts;
