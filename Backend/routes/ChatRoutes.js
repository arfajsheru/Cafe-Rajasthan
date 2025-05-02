import express from "express";
import { chatWithAI } from "../controller/ChatConroller.js";
import authMiddleware from "../middleware/auth.js";

const chatRouter = express.Router();

chatRouter.post("/chat", authMiddleware, chatWithAI);

export default chatRouter;