import foodModel from '../model/foodModel.js';
import cloudinary from '../config/cloudinary.js'; // ✅ Sahi import

// Add food Controller
const addFood = async (req, res) => {
  try {
    const {
      name,
      des,
      current_price,
      original_price,
      offer,
      category,
      subcategory,
      rating,
      bestSeller,
    } = req.body;

    const ratingData = JSON.parse(rating);
    if (!req.file) {
      return res
        .status(400)
        .json({success: false, message: 'Image is required'});
    }

    // ✅ Cloudinary pe upload karna
    const uploadedResponse = cloudinary.uploader.upload_stream(
      {resource_type: 'auto', folder: 'foodImages'},
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          return res
            .status(500)
            .json({success: false, message: 'Cloudinary upload failed'});
        }

        // ✅ New food item create
        const food = new foodModel({
          name,
          des,
          current_price,
          original_price,
          offer,
          category,
          subcategory,
          image: result.secure_url, 
          rating: ratingData,
          bestSeller,
          date: Date.now(),
        });

        food
          .save()
          .then(() =>
            res.json({success: true, message: 'Food item added', data: food}),
          )
          .catch(err =>
            res
              .status(500)
              .json({success: false, message: 'Database error', error: err}),
          );
      },
    );

    uploadedResponse.end(req.file.buffer);
  } catch (error) {
    console.error('AddFood Error:', error);
    res.status(500).json({success: false, message: 'Error in adding food'});
  }
};




// List food controller
const listFood = async (req, res) => {
  try {
    const products = await foodModel.find({});
    res.json({success: true, products});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
};

// Remove food controller
const removeFood = async (req, res) => {
  try {
    const deletefood = await foodModel.findByIdAndDelete(req.body.id);
    if(!deletefood) {
        res.json({success:false, message:"Food Item not found"})
    }
    res.json({success: true, message: 'Food Item removed'});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
};
export {addFood, listFood, removeFood};
