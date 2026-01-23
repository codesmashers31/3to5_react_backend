import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import arrayRoute from './routes/arrayRoutes.js'


dotenv.config()


const app = express()

app.use(cors())

app.use(express.json())

app.use("/api/array",arrayRoute)

// http://localhost:5000/api/array
const PORTED = process.env.PORTNEW || 5000


app.listen(PORTED,()=>{

    console.log(`Server stared successfully http://localhost:${PORTED}`);
    

})
