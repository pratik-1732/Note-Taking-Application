import express from "express";

const signinUser = (req, res) => {
  res.status(200).json({ message: "signin page" });
};

export default signinUser;
