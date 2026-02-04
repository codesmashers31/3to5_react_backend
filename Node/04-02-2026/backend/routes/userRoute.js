import express from "express";
import {
  addUser,
  getUsers,
  updateUser,
  deleteUser
} from "../controllers/userController.js";

const router = express.Router();

router.post("/added", addUser);
router.get("/getdata", getUsers);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;


// http://localhost:5000/api/user/added

//  http://localhost:5000/api/user/getdata

//  http://localhost:5000/api/user/update/

// http://localhost:5000/api/user/delete/