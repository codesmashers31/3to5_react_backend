import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRouter from './routes/authRoutes.js'
import connectDb from './config/db.js'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
connectDb()
app.use("/api/auth",authRouter)

const PORT = process.env.PORT || 5000
// http://localhost:5000/api/auth

app.listen(PORT,()=>{
    console.log(`Server Connected succfully http://localhost:${PORT}`);
})