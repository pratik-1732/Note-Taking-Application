import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
});

const note = mongoose.model("note", noteSchema);

export default note;
