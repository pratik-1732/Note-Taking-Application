import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const sendOtp = async (toEmail, otp) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: toEmail,
    subject: "OTP Verification Code",
    text: `Your OTP for Note Taking application is ${otp}. Please enter it correctly and do not share it. It is valid for two minute.`,
  };
  await transporter.sendMail(mailOptions);
};

export default sendOtp;
