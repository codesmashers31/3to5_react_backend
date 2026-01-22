import express from 'express'
import { demoBodyData, demoheaderData, demoparamsData,demoqueryData } from '../controllers/demoController.js'


const demo_route = express.Router()

demo_route.post('/bodypost',demoBodyData)
demo_route.get("/paramsdata/:userid",demoparamsData)
demo_route.get("/querydata",demoqueryData)
demo_route.get("/headerdata",demoheaderData)

export default demo_route;

// http://localhost:5000/api/demo/bodypost
// http://localhost:5000/api/demo/paramsdata/20
// http://localhost:5000/api/demo/querydata
// http://localhost:5000/api/demo/headerdata