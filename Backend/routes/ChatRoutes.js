import express from "express";
import { getUserChat, saveUserMessage } from "../controller/ChatConroller.js";
import authMiddleware from "../middleware/auth.js";

const chatRouter = express.Router();

chatRouter.get("/getchat", authMiddleware, getUserChat);
chatRouter.post("/send", authMiddleware, saveUserMessage);

export default chatRouter;