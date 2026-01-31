import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import dataRoute from './routes/dataRoute.js'
import connectDB from './config/db.js'


dotenv.config()


const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/data',dataRoute)

connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server Connecetd http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/data

