import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI!, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch (err) {
        console.log(`Error ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;