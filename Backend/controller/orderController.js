import orderModel from "../model/orderModel.js";
import userModel from "../model/userModel.js";
import Stripe from "stripe"


const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY)


// placing user order for frontend
const placeOrder = async (req, res) => {
res.send("Api testing")
}

export {placeOrder}