import express from "express";
import User from "../models/user.js";

const signinUser = async (req, res) => {
  const { email } = req.body;

  const loggedUser = await User.findOne({ email });
  if (loggedUser) {
    return res
      .status(200)
      .json({ message: "user logged in successfully", userId: loggedUser._id });
  } else {
    return res.status(400).json({ message: "User does not exist." });
  }
};

export default signinUser;
