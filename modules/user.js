const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
  userName: { type: String, require: true },
  userPassword: { type: String, require: true },
  //   userId: { type: String, require: true },
});

const User = mongoose.model("User", userSchema);

exports.User = user;
