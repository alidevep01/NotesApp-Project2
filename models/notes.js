const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  img: String,
});

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;
