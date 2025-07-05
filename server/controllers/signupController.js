import express from "express";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

const createToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const signupUser = async (req, res) => {
  const { name, email, dob } = req.body;

  const newUser = await User.findOne({ email });
  if (!newUser) {
    const createdUser = await User.create({ name, email, dob });
    const token = createToken({ email });
    return res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({ message: "user created successfully", userId: createdUser._id });
  } else {
    return res.status(400).json({ message: "user already registered" });
  }
};

export default signupUser;
