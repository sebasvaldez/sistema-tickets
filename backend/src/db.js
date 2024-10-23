import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/ticket-system");
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error);

        
    }
};