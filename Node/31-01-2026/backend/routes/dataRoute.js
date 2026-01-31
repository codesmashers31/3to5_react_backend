import express from 'express'
import { dataCreate, dataget,datagetbyId ,deletedata} from '../controllers/dataController.js'


// http://localhost:5000/api/data/save - Post Insert
// http://localhost:5000/api/data/getdata - get get all datas
// http://localhost:5000/api/data/getdatabyid/1 - get by id take single value
// http://localhost:5000/api/data/deletedatabyid/1
const dataRoute = express.Router()

dataRoute.post("/save",dataCreate)
dataRoute.get("/getdata",dataget)
dataRoute.get("/getdatabyid/:databy_id",datagetbyId)
dataRoute.delete("/deletedatabyid/:databy_id",deletedata)

export default dataRoute