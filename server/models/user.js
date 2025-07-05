import mongoose from "mongoose";
import note from "./note.js";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "note" }],
});

const user = mongoose.model("user", userSchema);

export default user;
