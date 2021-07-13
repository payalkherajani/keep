import express, { Express } from 'express';

const app: Express = express();
import connectDB from './config/db';

connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
});