import axios from "axios";
import chatModel from "../model/ChatModel.js";


export const chatWithAI = async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages format." });
    }

    // Save user message to DB
    const lastUserMessage = messages[messages.length - 1];
    const userMessageEntry = new chatModel({
      role: lastUserMessage.role,
      content: lastUserMessage.content,
    });
    await userMessageEntry.save();

    // Call OpenAI API
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API}`,
          "Content-Type": "application/json",
        }
      }
    );

    const botReply = response.data.choices[0].message;

    // Save bot message to DB
    const botMessageEntry = new chatModel({
      role: botReply.role,
      content: botReply.content,
    });  
    await botMessageEntry.save();

    // Send back the bot message
    res.status(200).json(botReply);

  } catch (error) {
    console.error("AI error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong with AI chat." });
  }
};
