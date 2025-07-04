import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  BirthDate: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);

export default user;
