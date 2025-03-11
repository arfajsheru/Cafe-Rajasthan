import mongoose from "mongoose";

const foodSchema  = new mongoose.Schema({
    name:{type:String, require:true},
    des:{type:String, require:true},
    current_price:{type:Number, require:true},
    original_price:{type:Number, require:true},
    offer:{type:Number, require:true},
    category:{type:String, require:true},
    subcategory:{type:String, require:true},
    image:{type:String, require:true},
    rating: {
        stars:{type:String, require:true},
        views:{type:String, require:true}
    },
    bestSeller:{type:Boolean, require:false, default:false}
});


const foodModel = mongoose.models.food || mongoose.model("food",foodSchema);

export default foodModel;