import express from "express"
import { create,getbyid,getData } from "../controllers/userController.js"


const route = express.Router()

route.post("/createdatas",create)
route.get("/getdatas",getData)
route.get("/getbyid/:id",getbyid)



export default route


// http://localhost:5000/api/create/createdatas
// http://localhost:5000/api/create/getdatas
// http://localhost:5000/api/create/getbyid/4782364876