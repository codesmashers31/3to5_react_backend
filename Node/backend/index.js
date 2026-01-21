import express from 'express';
import dotenv from 'dotenv';
import messageRoute from './routes/messageRoute.js'
import cors from 'cors'
dotenv.config()

const app = express()

//console.log(express);

app.use(express.json())

app.use(cors())

const PORT = process.env.PORT || 5000

app.use("/api/message",messageRoute)

// http://localhost:5000/api/message
app.listen(PORT,()=>{

    console.log(`Server Connected with host http://localhost:${PORT}`);
    

})