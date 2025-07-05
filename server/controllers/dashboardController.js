import express from "express";
import User from "../models/user.js";

const getDashboard = async (req, res) => {
  const { userId } = req.params;

  try {
    const displayUser = await User.findById(userId).populate("notes");

    if (!displayUser)
      return res.status(404).json({ message: "user not found." });

    return res.status(200).json({
      name: displayUser.name,
      email: displayUser.email,
      notes: displayUser.notes,
    });
  } catch (error) {
    console.error("Dashboard Error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default getDashboard;
