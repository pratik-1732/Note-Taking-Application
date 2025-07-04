import express from "express";

const signupUser = (req, res) => {
  const { name, email, dob } = req.body;
  res.status(200).json({ message: "signup page" });
};

export default signupUser;
