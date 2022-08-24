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
        title: "notes2",
        description: "green",
        img: "hsdkhfksdhfkshdkf",
      },
      {
        title: "notes3",
        description: "purple",
        img: "hsdkhfksdhfkshdkf",
      },
    ],
    (err, data) => {
      res.redirect("/notes");
    }
  );
});

//SHOW route
router.get("/:id", (req, res) => {
  Note.findById(req.params.id, (err, showNote) => {
    res.render("show.ejs", { showNote });
  });
});

module.exports = router;
