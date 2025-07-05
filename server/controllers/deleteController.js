import Note from "../models/note.js";

const deleteNote = async (req, res) => {
  const { noteId } = req.params;
  try {
    await Note.findByIdAndDelete(noteId);
    res.status(200).json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting note" });
  }
};

export default deleteNote;
