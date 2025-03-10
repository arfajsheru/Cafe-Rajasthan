import express from "express";
import { addFood } from "../controller/foodController.js";
import uploads from "../middleware/multer.js";

const foodRouter = express.Router();

// JSON data ke saath image upload hoga
foodRouter.post("/add", uploads.single("image"), addFood);

export default foodRouter;
