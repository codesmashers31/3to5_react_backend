import express from 'express';
import { Create,getById,GetData } from '../controllers/arrayController.js';

// API LIST
//http://localhost:5000/api/array/create
//http://localhost:5000/api/array/getData
// http://localhost:5000/api/array/getById
const arrayRoute = express.Router()

arrayRoute.post('/create',Create)
arrayRoute.get('/getData',GetData)
arrayRoute.post('/getById/',getById)


export default arrayRoute;