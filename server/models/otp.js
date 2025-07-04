import mongoose from "mongoose";

const otpSchema = mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  Otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60,
  },
});

const otp = mongoose.model("otp", otpSchema);

export default otp;
