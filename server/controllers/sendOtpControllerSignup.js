import express from "express";
import Otp from "../models/otp.js";
import sendOtp from "../utils/mailer.js";

function generateOtp() {
  return Math.floor(Math.random() * 900000).toString();
}

const sendOtpToMailSignup = async (req, res) => {
  const { email } = req.body;
  const otp = generateOtp();

  try {
    await Otp.deleteMany({ email });
    await Otp.create({ email, otp });
    const response = await sendOtp(email, otp);

    res.status(200).json({ message: "otp sent successfully" });
  } catch (error) {
    console.log("otp not sent:", error.message);
    res
      .status(500)
      .json({ message: "Failed to sent otp", error: error.message });
  }
};

export default sendOtpToMailSignup;
