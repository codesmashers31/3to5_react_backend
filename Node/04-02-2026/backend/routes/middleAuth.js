import express from "express";
import { checkAge } from "../middleware/checkAge.js";
import { submitForm } from "../controllers/formController.js";

const router = express.Router();

router.post("/submit", checkAge, submitForm);

export default router;



//  http://localhost:5000/api/middle/submit