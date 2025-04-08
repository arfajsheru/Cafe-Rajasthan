import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import 'dotenv/config';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import dotenv from 'dotenv';
import cartRouter from './routes/CartRoute.js';
import orderRouter from './routes/OrderRoute.js';
// app config
const app = express();

dotenv.config();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
  cors({
    origin: "http://192.168.0.122",
    credentials: true,
  })
);

// MonogDB connect
connectDB();

// api end point
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
  res.send('Welcom to new Cafe Rajathan?');
});

app.listen(process.env.PORT || 4000, '0.0.0.0', () => {
  console.log('http://localhost:4000');
});
