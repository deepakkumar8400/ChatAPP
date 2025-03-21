import express from "express";
import connectDB from './config/database.js'
import userRoute from './routes/userRoute.js'

const app=express();

const PORT=5000;

app.use(express.json());

app.use("/api/v1/user", userRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on the port ${PORT}`);
})