import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import demoRoute from './routes/demoRoute.js'
dotenv.config()

const app_new = express()

app_new.use(cors());

app_new.use(express.json())

app_new.use('/api/demo',demoRoute)
// http://localhost:5000/api/demo
const PORTNUMBER = process.env.PORT || 5000

app_new.listen(PORTNUMBER,()=>{

    console.log(`Server Connected http://localhost:${PORTNUMBER}`);
    

})