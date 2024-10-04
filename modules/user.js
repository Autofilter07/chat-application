const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true , unique:true },
  password: { type: String, required: true },
  //   userId: { type: String, require: true },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
