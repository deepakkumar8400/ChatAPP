import express from "express";
import connectDB from './config/database.js'
import userRoute from './routes/userRoute.js'
import cookieparser from "cookie-parser";
import messageRoute from "./routes/messageRoute.js";

const app=express();
const PORT=5000;

app.use(express.json());
app.use(cookieparser());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on the port ${PORT}`);
})