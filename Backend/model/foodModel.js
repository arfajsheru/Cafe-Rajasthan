import mongoose from "mongoose";

const foodSchema  = new mongoose.Schema({
    name:{type:String, required:true},
    des:{type:String, required:true},
    current_price:{type:Number, required:true},
    original_price:{type:Number, required:true},
    offer:{type:Number, required:true},
    category:{type:String, required:true},
    subcategory:{type:String, required:true},
    image:{type:String, required:true},
    rating: {
        stars:{type:Number, required:true},
        views:{type:Number, required:true}
    },
    bestSeller:{type:Boolean, required:false},
    date:{type:Number, default:Date.now}
});


const foodModel = mongoose.models.food || mongoose.model("food",foodSchema);

export default foodModel;