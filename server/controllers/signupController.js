import express from "express";
import user from "../models/user.js";

const signupUser = async (req, res) => {
  const { name, email, dob } = req.body;

  const newUser = await user.findOne({ email });
  if (!newUser) {
    await user.create({ name, email, dob });
    return res
      .status(200)
      .json({ message: "user created successfully", userId: user._id });
  } else {
    return res.status(400).json({ message: "user already registered" });
  }
};

export default signupUser;
