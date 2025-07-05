import mongoose from "mongoose";
import Note from "./note.js";

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
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
});

const user = mongoose.model("User", userSchema);

export default user;
