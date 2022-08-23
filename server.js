const express = require("express");
const app = express();

const { Router } = require("express");

/* ****************Middleware ***************** */
app.use(express.json());
//body data middleware
app.use(express.urlencoded({ extended: true }));
//method override middleware
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//Requiring database
const Notes = require("./models/notes");
//serve public files
app.use(express.static("public"));

/* *************** Requiring and Connecting Mongoose to the server ***************** */
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/basiccrud2");
mongoose.connection.once("open", () => {
  console.log("Connected to Mongo");
});

/* ***************** Routes & Controllers ******************** */

/* ****************** PORT 3000 ******************************* */
app.listen(3000, () => {
  console.log("Listening on PORT 3000");
});
