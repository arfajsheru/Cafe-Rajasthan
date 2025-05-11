import express from "express"
import authMiddleware from "../middleware/auth.js";
import { submitFeedback } from "../controller/feedbackController.js";

const feebackRouter = express.Router();

feebackRouter.post('/submit', authMiddleware, submitFeedback);

export default feebackRouter;



