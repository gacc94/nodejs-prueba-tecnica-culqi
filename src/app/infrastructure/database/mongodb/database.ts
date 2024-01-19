import mongoose from 'mongoose';

export const connectMongoDb = async () => {
    try {
        // await mongoose.connect(process.env.MONGODB_URI);
        await mongoose.connect('mongodb://localhost:27017/culqi');
        console.log('Database connection Successfully');
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to database');
    }
};