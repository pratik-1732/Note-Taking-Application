import express from "express";
import verifyOtp from "../controllers/verifyOtpController.js";
import sendOtpToMailSignin from "../controllers/sendOtpControllerSignin.js";
import sendOtpToMailSignup from "../controllers/sendOtpControllerSignup.js";

const router = express.Router();

router.post("/signup/send", sendOtpToMailSignin);
router.post("/signin/send", sendOtpToMailSignup);
router.post("/verify", verifyOtp);

export default router;
