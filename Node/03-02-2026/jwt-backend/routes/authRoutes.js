
import express from "express";
import {
  registerUser,
  loginUser,
  dashboard
} from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/dashboard", authMiddleware, dashboard);

export default router;
