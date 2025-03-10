import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import 'dotenv/config';
import foodRouter from './routes/foodRoute.js';

// app config
const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(cors());

// MonogDB connect
connectDB();

// api end point
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'))

app.get('/', (req, res) => {
  res.send('Welcom to new Cafe Rajathan');
});

app.listen(port, () => {
  console.log(`Server Started http://localhost:${port}`);
});
