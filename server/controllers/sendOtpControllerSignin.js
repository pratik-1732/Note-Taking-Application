import express from "express";
import Otp from "../models/otp.js";
import sendOtp from "../utils/mailer.js";
import User from "../models/user.js";

function generateOtp() {
  return Math.floor(Math.random() * 900000).toString();
}

const sendOtpToMailSignin = async (req, res) => {
  const { email } = req.body;
  const userLoggedIn = await User.findOne({});
  if (userLoggedIn) {
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
  } else {
    res.status(404).json({ message: "Sign up first" });
  }
};

export default sendOtpToMailSignin;
