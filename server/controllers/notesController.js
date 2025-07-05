import Note from "../models/note.js";
import User from "../models/user.js";

const createNote = async (req, res) => {
  const { content, userId } = req.body;

  if (!content || !content.trim()) {
    return res.status(400).json({ message: "Note cannot be empty" });
  }
  try {
    const newNote = await Note.create({ content });

    await User.findByIdAndUpdate(
      userId,
      {
        $push: { notes: newNote._id },
      },
      { new: true }
    );

    res.status(201).json({ message: "New note created", newNote });
  } catch (err) {
    console.error("Note creation error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default createNote;
