import chatModel from "../model/ChatModel.js";



export const getUserChat = async (req, res) => {
    try {
      const chat = await chatModel.findOne({ userId: req.user.id });
      if (!chat) return res.status(404).json({ message: "No chat found" });
      res.json(chat);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  export const saveUserMessage = async (req, res) => {
    const { role, content } = req.body;
    try {
      let chat = await ChatModel.findOne({ userId: req.user.id });
      if (!chat) {
        chat = new ChatModel({ userId: req.user.id, messages: [] });
      }
      chat.messages.push({ role, content });
      await chat.save();
      res.status(200).json(chat);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

