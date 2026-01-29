import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './config/db.js';
import userRoute from './route/userRoutes.js'

dotenv.config()

const app = express()
 

app.use(cors())
app.use(express.json())

app.use("/api/create",userRoute)

connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Successfully conbetected running on http://localhost:${PORT}`);
    
})