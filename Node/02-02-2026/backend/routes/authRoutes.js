import express from 'express'
import { authLogin, authRegister } from '../controllers/authController.js';

// http://localhost:5000/api/auth/register
// http://localhost:5000/api/auth/login
const route = express.Router()

route.post("/register",authRegister)
route.post("/login",authLogin)
export default route;