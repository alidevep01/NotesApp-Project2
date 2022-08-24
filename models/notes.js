const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  img: String,
  crossText: Boolean,
});

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;
