import express from "express";
const app = express();

import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.js";
import dashboardRoute from "./routes/dashboard.js";
import otpRoute from "./routes/otpRoutes.js";
import noteRote from "./routes/noteRoutes.js";

dotenv.config();
connectDB();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cookieParser());
console.log("FRONTEND_URL env:", process.env.FRONTEND_URL);

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// routes /
app.use("/api/auth", authRoute);
app.use("/api/dashboard", dashboardRoute);
app.use("/api/otp", otpRoute);
app.use("/api/notes", noteRote);

app.get("/", (req, res) => {
  res.send("hello to the server");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});
