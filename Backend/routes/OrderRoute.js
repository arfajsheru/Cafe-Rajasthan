import express from "express"
import authMiddleware from "../middleware/auth.js"
import {fetchOrder, placeOrder, verifyOrder} from "../controller/orderController.js"


const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder)
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/orderlist", authMiddleware, fetchOrder)


export default orderRouter