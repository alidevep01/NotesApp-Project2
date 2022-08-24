const express = require("express");
const app = express();

const { Router } = require("express");
//Dotenv environment
require("dotenv").config();

/* ==== Internal Modules ==== */
const testCtrl = require("./controllers/notescntrl");
/* ****************Middleware ***************** */
app.use(express.json());
//body data middleware
app.use(express.urlencoded({ extended: true }));
//method override middleware
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//Requiring controller
const notesController = require("./controllers/notescntrl");

//Requiring database
const Note = require("./models/notes");
const data = require("./models/index");
//serve public files
app.use(express.static("public"));

/* *************** Requiring and Connecting Mongoose to the server ***************** */
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/NotesApp");
// mongoose.connection.once("open", () => {
//   console.log("Connected to Mongo");
// });

/* ***************** Routes & Controllers ******************** */
app.use("/notes", notesController);
//internal routes
// app.use("/posts", testCtrl);

/* ****************** PORT 3000 ******************************* */
app.listen(3000, () => {
  console.log("Listening on PORT 3000");
});
