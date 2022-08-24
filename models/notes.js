const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String },
  description: String,
  img: String,
  crossText: Boolean,
});

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;
