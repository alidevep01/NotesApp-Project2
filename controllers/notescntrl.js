const express = require("express");
const router = express.Router();
const Note = require("../models/notes");

//INDEX route
//ASYNC & AWAIT
router.get("/", async (req, res) => {
  let notes = await Note.find({});
  res.render("index.ejs", { notes });
});

//SEED route
router.get("/seed", (req, res) => {
  Note.create(
    [
      {
        title: "notes1",
        description: "pink",
        img: "hsdkhfksdhfkshdkf",
      },
      {
        title: "notes1",
        description: "pink",
        img: "hsdkhfksdhfkshdkf",
      },
      {
        title: "notes1",
        description: "pink",
        img: "hsdkhfksdhfkshdkf",
      },
    ],
    (err, data) => {
      res.redirect("/notes");
    }
  );
});

module.exports = router;
