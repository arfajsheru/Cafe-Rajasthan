import userModel from '../model/userModel.js';

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId)
  
    let cartData = await userData.cartData;
    if(!cartData[req.body.itemId]){
      cartData[req.body.itemId] = 1
    }
    else {
      cartData[req.body.itemId] += 1
    }

    await userModel.findByIdAndUpdate(req.body.userId, {cartData})
    res.json({success:true, message:"Add To Cart"})
  } catch (error) {
    console.log(error),
    res.json({success:false, message:"Error"})
  }
};

const removeFromCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);
    const cartData = userData.cartData;

    const itemId = req.body.itemId;

    if (cartData[itemId] > 0) {
      cartData[itemId] -= 1;

      // ✅ If quantity becomes 0, remove the item from cart
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Item removed from cart" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;

    res.json({success:true, cartData})
  } catch (error) {
    console.log(error)
    res.json({success:false, message:"Error"})
  }
};

const removeItemFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData;

    if (cartData && cartData[itemId]) {
      delete cartData[itemId];
    } else {
      return res.status(400).json({ success: false, message: "Item not found in cart" });
    }

    await userModel.findByIdAndUpdate(req.body.userId, {cartData})

    res.status(200).json({ success: true, message: "Item removed from cart", cartData });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};  

export {addToCart, removeFromCart, getCart,removeItemFromCart};