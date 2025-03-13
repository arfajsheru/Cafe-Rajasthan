import express from "express";
import { addFood, listFood, removeFood } from "../controller/foodController.js";
import uploads from "../middleware/multer.js";

const foodRouter = express.Router();

// JSON data ke saath image upload hoga
foodRouter.post("/add", uploads.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
