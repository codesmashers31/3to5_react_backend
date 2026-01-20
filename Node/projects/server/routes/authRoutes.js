import express from 'express'
import { userController } from '../controllers/userController.js'


const route = express.Router()


route.post('/auth',userController)
// http://localhost/5000/api/users/auth

export default route