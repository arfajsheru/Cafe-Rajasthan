import mongoose from 'mongoose';



const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/CafeRajathan`);
    console.log('✅ MongoDB Connected Successfully!');
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
    process.exit(1); // Process exit if connection fails
  }
};

export default connectDB;
