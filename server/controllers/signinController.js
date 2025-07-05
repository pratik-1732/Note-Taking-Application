import express from "express";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

const createToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const signinUser = async (req, res) => {
  const { email } = req.body;

  const loggedUser = await User.findOne({ email });
  if (loggedUser) {
    const token = createToken({ email });
    return res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({ message: "user logged in successfully", userId: loggedUser._id });
  } else {
    return res.status(400).json({ message: "User does not exist." });
  }
};

export default signinUser;
