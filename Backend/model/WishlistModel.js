import mongoose from "mongoose"

const wishlistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        require:true
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'food'
        }
    ]
})

const WishlistModel = mongoose.models.wishlist || mongoose.model("wishlist", wishlistSchema);
export default WishlistModel;