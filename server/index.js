import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import route from './routes/userRoute.js';
dotenv.config();
const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api' , route)

app.listen(process.env.PORT ,() => {
    connectDB();
    console.log('Server is running on port 3003');
})