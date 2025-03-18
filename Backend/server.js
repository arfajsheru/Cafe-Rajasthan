import express from 'express';
import cors from "cors";
import connectDB from './config/db.js';
import 'dotenv/config';
import foodRouter from './routes/foodRoute.js';

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors({
  origin: ["http://192.168.13.37"],  // Laptop ka IP
  credentials: true
}));


// MonogDB connect
connectDB();

// api end point
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'))

app.get('/', (req, res) => {
  res.send('Welcom to new Cafe Rajathan?');
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running on port 4000");
});

