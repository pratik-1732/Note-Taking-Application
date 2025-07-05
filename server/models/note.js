import mongoose from "mongoose";
import User from "./user.js";

const noteSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const note = mongoose.model("Note", noteSchema);

export default note;
