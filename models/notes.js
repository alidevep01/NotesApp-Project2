const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: String,
  description: String,
  img: String,
  color: String,
});

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;
