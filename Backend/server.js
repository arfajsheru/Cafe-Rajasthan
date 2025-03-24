import express from 'express';
import cors from "cors";
import connectDB from './config/db.js';
import 'dotenv/config';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import dotenv from "dotenv"
// app config
const app = express();
const port = 4000;
dotenv.config()

// middleware
app.use(express.json({ limit: '50mb' }));
app.use(cors());



// MonogDB connect
connectDB();

// api end point
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)

app.get('/', (req, res) => {
  res.send('Welcom to new Cafe Rajathan?');
});

app.listen(process.env.PORT || 4000, () => {
  console.log("http://localhost:4000");
});

