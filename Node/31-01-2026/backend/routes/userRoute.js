import express from 'express'
import { getthedata } from '../controllers/userController.js'

// http://localhost:5000/api/users/show
const route = express.Router()


route.get("/show",getthedata)


export default route