import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost/Twitter_Dev');
        console.log('succesfully connected to the db');
    } catch (error) {
        throw error;
    }
    
}