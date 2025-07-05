import express from "express";
const router = express.Router();

import signinUser from "../controllers/signinController.js";
import signupUser from "../controllers/signupController.js";
import logoutUser from "../controllers/logoutController.js";

router.post("/signup", signupUser);
router.post("/login", signinUser);
router.post("/logout", logoutUser);

export default router;
