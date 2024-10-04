const { mongoose, Schema } = require("mongoose");

const messageSchema = new Schema({
 senderId : {type:String , require:true},
});

const Chat = mongoose.model("Chat", messageSchema);

exports.Chat = Chat;
