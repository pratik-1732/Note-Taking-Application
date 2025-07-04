import express from "express";
import verifyOtp from "../controllers/verifyOtpController.js";
import sendOtpToMail from "../controllers/sendOtpController.js";

const router = express.Router();

router.post("/send", sendOtpToMail);
router.post("/verify", verifyOtp);

export default router;
