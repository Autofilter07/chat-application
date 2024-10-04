const { mongoose, Schema } = require("mongoose");

const messageSchema = new Schema({
  senderId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  receiverId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  timeStamp: { type: Date, default: Date.now },
});

const Chat = mongoose.model("Chat", messageSchema);

exports.Chat = Chat;
