import express from "express";
import otp from "../models/otp.js";

const verifyOtp = async (req, res) => {
  const { email, enteredOtp } = req.body;

  try {
    const otpRecord = await otp.findOne({ email });

    if (!otpRecord)
      return res.status(400).json({ message: "otp not found or expired" });

    if (otpRecord.otp !== enteredOtp)
      return res.status(400).json({ message: "invalid otp" });

    await otp.deleteOne({ email });
    res.status(200).json({ message: "otp verified successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "OTP verification failed", error: error.message });
  }
};

export default verifyOtp;
