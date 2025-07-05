import express from "express";
import createNote from "../controllers/notesController.js";
import deleteNote from "../controllers/deleteController.js";

const router = express.Router();
router.post("/create", createNote);
router.delete("/:noteId", deleteNote);

export default router;
