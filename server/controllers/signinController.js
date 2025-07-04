import express from "express";

const signinUser = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const loggedUser = await user.findOne({ email });
  if (loggedUser) {
    return res.status(200).json({ message: "user logged in successfully" });
  } else {
    return res.status(400).json({ message: "user already registered" });
  }
};

export default signinUser;
