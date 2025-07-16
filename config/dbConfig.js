import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

export const dbConnect = async ()=>{

        try {
            await mongoose.connect(process.env.MONGO_URL)
            console.log('MongoDB connected successfully')
        } catch (error) {
            console.log('MongoDB connection error',error)
        }
    }