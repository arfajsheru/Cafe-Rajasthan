import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["user", "assistant"],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const chatModel = mongoose.models.Chat || mongoose.model("Chat", chatSchema);

export default chatModel;
