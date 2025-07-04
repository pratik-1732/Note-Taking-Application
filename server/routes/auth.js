import express from "express";
import signinUser from "../controllers/signinController.js";
import signupUser from "../controllers/signupController.js";
const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", signinUser);

export default router;
