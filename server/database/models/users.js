const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
});

const Users = model("Users", UserSchema);
module.exports = Users;
