import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DataBase Connected...!");        
    } catch (error) {
        console.log("Error in db" , error);
        process.exit(1);
    }
}

export default connectDB;