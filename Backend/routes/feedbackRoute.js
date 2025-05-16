import express from "express"
import authMiddleware from "../middleware/auth.js";
import { feedbackList, submitFeedback } from "../controller/feedbackController.js";

const feedbackRouter = express.Router();

feedbackRouter.post('/submit', authMiddleware, submitFeedback);
feedbackRouter.get('/all', feedbackList);
export default feedbackRouter;



