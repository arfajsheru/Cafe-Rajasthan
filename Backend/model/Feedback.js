import mongoose from "mongoose";
const feedbackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: { // 🆕 new field
    type: String,
    required: true,
  },
  rating: {
    type: String,
    enum: ['Terrible', 'Bad', 'Okay', 'Good', 'Amazing'],
    required: true,
  },
  reason: {
    type: String,
    required: false,
  },
  connected: {
    type: Boolean,
    default: false,
  },
  wantToHelp: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });


const Feedback = mongoose.models.feedback || mongoose.model("feedback", feedbackSchema);
export default Feedback;
