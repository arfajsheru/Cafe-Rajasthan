import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import 'dotenv/config';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import dotenv from 'dotenv';
import cartRouter from './routes/CartRoute.js';
import orderRouter from './routes/OrderRoute.js';
import chatRouter from './routes/ChatRoutes.js';
import feedbackRouter from './routes/feedbackRoute.js';
// app config
const app = express();

dotenv.config();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
  cors({
    origin: '*',
  })
);
// mongodb+srv://arfajsheru:arfajsheru98@cluster0.8c6er99.mongodb.net/?

// MonogDB connect
connectDB();
 
// api end point
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api', chatRouter);
app.use('/api/feedback', feedbackRouter);
app.get('/', (req, res) => {
  res.send('Welcom to new Cafe Rajathan?');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});