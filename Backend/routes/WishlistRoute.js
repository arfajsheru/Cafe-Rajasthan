import express from "express"
import authMiddleware from "../middleware/auth.js";
import { addToWishlist, getWishlist, removeToWishlist } from "../controller/WishlistController.js";

const wishlistRouter = express.Router();

wishlistRouter.post("/get", authMiddleware, getWishlist);
wishlistRouter.post("/add", authMiddleware, addToWishlist)
wishlistRouter.post("/remove", authMiddleware, removeToWishlist)

export default wishlistRouter;