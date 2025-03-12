import foodModel from "../model/foodModel.js";
import cloudinary from "../config/cloudinary.js"; // ✅ Sahi import

const addFood = async (req, res) => {
    try {
        const { name, des, current_price, original_price, offer, category, subcategory, rating, bestSeller } = req.body;

        const ratingData = JSON.parse(rating)
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        // ✅ Cloudinary pe upload karna
        const uploadedResponse = cloudinary.uploader.upload_stream(
            { resource_type: "auto", folder: "foodImages" },
            (error, result) => {
                if (error) {
                    console.error("Cloudinary upload error:", error);
                    return res.status(500).json({ success: false, message: "Cloudinary upload failed" });
                }

                // ✅ New food item create karna
                const food = new foodModel({
                    name,
                    des,
                    current_price,
                    original_price,
                    offer,
                    category,
                    subcategory,
                    image: result.secure_url, // ✅ Cloudinary Image URL
                    rating:ratingData,
                    bestSeller,
                    date:Date.now()
                });

                food.save()
                    .then(() => res.json({ success: true, message: "Food item added", data:food}))
                    .catch((err) => res.status(500).json({ success: false, message: "Database error", error: err }));
            }
        );

        uploadedResponse.end(req.file.buffer); // ✅ Memory buffer pass karna mat bhul

    } catch (error) {
        console.error("AddFood Error:", error);
        res.status(500).json({ success: false, message: "Error in adding food" });
    }
};

export { addFood };
