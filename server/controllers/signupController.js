import express from "express";
import User from "../models/user.js";

const signupUser = async (req, res) => {
  const { name, email, dob } = req.body;

  const newUser = await User.findOne({ email });
  if (!newUser) {
    await User.create({ name, email, dob });
    return res
      .status(200)
      .json({ message: "user created successfully", userId: User._id });
  } else {
    return res.status(400).json({ message: "user already registered" });
  }
};

export default signupUser;
