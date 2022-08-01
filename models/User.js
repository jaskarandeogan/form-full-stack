const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AppUsers = new Schema({
  name: {
    type: "string",
    required: true,
  },
  gender: {
    type: "string",
    enum: ["male", "female"],
  },
  age: {
    type: "number",
  },
  status: {
    type: "string",
    enum: ["citizen", "pr", "tr"],
  },
});

const User = mongoose.model("User", AppUsers);

module.exports = User;
