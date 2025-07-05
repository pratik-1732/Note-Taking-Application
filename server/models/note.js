import mongoose from "mongoose";
import user from "./user.js";

const noteSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const note = mongoose.model("note", noteSchema);

export default note;
