const mongoose = require("mongoose");
const User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  secondName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model("User", User);