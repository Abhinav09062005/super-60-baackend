import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

export const dbConnect = async ()=>{

<<<<<<< HEAD
        try {
            await mongoose.connect(process.env.MONGO_URL)
            console.log('MongoDB connected successfully')
        } catch (error) {
            console.log('MongoDB connection error',error)
        }
    }
=======
        try{
            await mongoose.connect(process.env.MONGO_URL)
            console.log('Database connected successfully');
        }
        catch(err){
            console.error('Database connection failed:', err);
        }
    
}
>>>>>>> 93e235dac78ef9ee663077f8f7da562615084792
