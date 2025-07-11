import express from "express";
import getDashboard from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/:userId", getDashboard);

export default router;
