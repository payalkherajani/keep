import express, { Application } from 'express';
import connectDB from './config/db';
import userRoutes from './routes/users.route';
import notesRoutes from './routes/notes.route';
import NoSuchRouteExists from './middlewares/noRoute.middleware';
import auth from './middlewares/auth.middleware';


const app: Application = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/notes', auth, notesRoutes);

app.use(NoSuchRouteExists);

app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
});