import express from 'express';
import {
  addToCart,
  removeFromCart,
  getCart,
  removeItemFromCart,
} from '../controller/CartController.js';
import authMiddleware from '../middleware/auth.js';
const cartRouter = express.Router();
cartRouter.post('/add', authMiddleware, addToCart);
cartRouter.post('/remove', authMiddleware, removeFromCart);
cartRouter.post('/delete', authMiddleware, removeItemFromCart);
cartRouter.get('/get', authMiddleware, getCart);

export default cartRouter;
