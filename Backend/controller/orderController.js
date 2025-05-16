import orderModel from '../model/orderModel.js';
import userModel from '../model/userModel.js';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY);

// placing user order for frontend
const placeOrder = async (req, res) => {
  const frontend_url = process.env.LAPTOP_IP;
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, {cartData: {}});

    const line_items = req.body.items.map(item => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.name,
        },
        unit_amount: item.current_price * 100 * 80,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: 'inr',
        product_data: {
          name: 'Delivery Charges',
        },
        unit_amount: 10 * 100 * 80,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: 'payment',
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({success: true, session_url: session.url});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: 'Error'});
  }
};

const verifyOrder = async (req, res) => {
  const {orderId, success} = req.body;
  try {
    if (success === 'true') {
      await orderModel.findByIdAndUpdate(orderId, {payment: true});
      res.json({success: true, message: 'Paid'});
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({success: false, message: 'Not Paid'});
    }
  } catch (error) {
    console.log(error);
    res.json({success: false, message: 'Error'});
  }
};

const fetchOrder = async (req, res) => {
  try {
    const {userId} = req.body;
    const orders = await orderModel.find({userId});
    res.json({success: true, orders});
    console.log(orders.length)
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
};

const allOrderList = async (req, res) => {
  try {
    const orders = await orderModel.find({}).sort({ createdAt: -1 });

    if (!orders || orders.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'All orders fetched successfully!',
      orders,
    });
  } catch (error) {
    console.log('❌ Error fetching all orders:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching orders',
    });
  }
};


const orderdelete = async (req, res) => {
  try {
    const result = await orderModel.deleteMany({}); // sabhi documents delete
    res.json({
      success: true,
      message: `All ${result.deletedCount} orders deleted successfully`,
    });
  } catch (error) {
    console.error('Error deleting all orders:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete all orders',
      error: error.message,
    });
  }
};

export {placeOrder, verifyOrder, fetchOrder, allOrderList, orderdelete};
