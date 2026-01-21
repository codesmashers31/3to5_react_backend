import express from 'express';
import { getData, showingData } from '../controllers/messageController.js';


const route = express.Router()


route.post("/create",showingData)
route.get("/get",getData)
// http://localhost:5000/api/message/create
// http://localhost:5000/api/message/get

export default route;