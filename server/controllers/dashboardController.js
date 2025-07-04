import express from "express";

const getDashboard = (req, res) => {
  res.status(200).json({ message: "dashboard page" });
};

export default getDashboard;
