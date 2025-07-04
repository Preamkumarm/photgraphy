import mongoose from 'mongoose';


const connectDB = async() => {
    try {
        
        await mongoose.connect("mongodb+srv://prsstudionkl:prsstudio@cluster0.zgbjb7v.mongodb.net/photography")
        console.log("DB Connected Successfully");

    } catch (error) {
        console.error("Error connecting to DB: ", error.message);
    }
}

export { connectDB };