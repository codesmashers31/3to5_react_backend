import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/authRoutes.js'
import cors from 'cors'

dotenv.config()

const app = express();

app.use(express.json())

app.use(cors())

app.use("/api/users",authRoute)

// http://localhost/5000/api/users

// app.get("/api/:name",(req,res)=>{



// })

// http://localhost/5000/api

const PORT = process.env.PORT || 3000


app.listen(PORT, ()=>{
    console.log(`Server Start http://localhost/${PORT}`);
    
})


// console.log(app);
