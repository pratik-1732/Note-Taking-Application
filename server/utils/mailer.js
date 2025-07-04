import express from "express";
import nodemailer from "nodemailer";

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
    subject: "otp verification code",
    text: `Your otp for Note Taking application is ${otp}. Please enter it correctly and do not share it. It is valid for one minute.`,
  };
  await transporter.sendMail(mailOptions);
};

export default sendOtp;
