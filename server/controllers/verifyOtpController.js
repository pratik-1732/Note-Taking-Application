import express from "express";
import Otp from "../models/otp.js";

const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP required" });
  }

  try {
    const otpRecord = await Otp.findOne({ email });

    if (!otpRecord)
      return res
        .status(400)
        .json({ message: "otp not found or expired", isVerified: false });

    if (otpRecord.otp !== otp)
      return res
        .status(400)
        .json({ message: "invalid otp", isVerified: false });

    await Otp.deleteOne({ email });
    res
      .status(200)
      .json({ message: "otp verified successfully", isVerified: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "OTP verification failed", error: error.message });
  }
};

export default verifyOtp;
