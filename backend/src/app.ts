import express, { Application, Express } from 'express';
import connectDB from './config/db';

const app: Application = express();
connectDB();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
});