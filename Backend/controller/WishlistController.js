import WishlistModel from '../model/WishlistModel.js';
import mongoose from 'mongoose';

const addToWishlist = async (req, res) => {
  try {
    const { itemId, userId } = req.body;


    if (!itemId || !mongoose.Types.ObjectId.isValid(itemId)) {
      return res.status(400).json({ message: 'Invalid Item ID' });
    }

    let wishlist = await WishlistModel.findOne({ user: userId });

    // If no wishlist exists, create one and add item
    if (!wishlist) {
      wishlist = new WishlistModel({ user: userId, items: [itemId] });
      await wishlist.save();
    } else {
      const itemIndex = wishlist.items.findIndex(id => id.toString() === itemId);

      if (itemIndex > -1) {
        // Already exists → remove it
        wishlist.items.splice(itemIndex, 1);
      } else {
        // Doesn't exist → add it
        wishlist.items.push(itemId);
      }

      await wishlist.save();
    }

    const populatedWishlist = await WishlistModel.findOne({ user: userId });

    res.status(200).json({ 
      message: 'Wishlist updated successfully', 
      wishlist: populatedWishlist 
    });

  } catch (error) {
    console.log('Error in AddToWishlist:', error);
    res.status(500).json({ message: 'Error updating wishlist', error });
  }
};

const getWishlist = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(401).json({message: 'User Not Authorized'});
    }

    const wishlist = await WishlistModel.findOne({user: userId})
      .populate('items')
      .lean();

    res.status(200).json({success: true, wishlist});
  } catch (error) {
    console.error('Error in getWishlist:', error);
    res.status(500).json({message: 'Error fetching wishlist', error});
  }
};

const removeToWishlist = async (req, res) => {
  try {
    const {itemId, userId} = req.body;

    if (!itemId || !mongoose.Types.ObjectId.isValid(itemId)) {
      return res.status(400).json({message: 'Invalid item ID'});
    }

    await WishlistModel.updateOne({user: userId}, {$pull: {items: itemId}});

    const updatedWishlist = await Wishlist.findOne({
      user: req.user.id,
    }).populate('items');
    res
      .status(200)
      .json({message: 'Removed from wishlist', wishlist: updatedWishlist});
  } catch (error) {
    console.error('Error in removeFromWishlist:', error);
    res.status(500).json({message: 'Error removing from wishlist', error});
  }
};

export {addToWishlist, getWishlist, removeToWishlist};
