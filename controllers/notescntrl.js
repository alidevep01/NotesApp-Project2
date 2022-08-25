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
        name: "Note0",
        title: "title",
        description: "pink",
        img: "https://img.ltwebstatic.com/images3_pi/2021/12/21/16400813622748b45198b6eddf6a8fb7a5b3b779a1_thumbnail_900x.webp",
      },
      {
        name: "Note1",
        title: "title",
        description: "green",
        img: "https://img.ltwebstatic.com/images3_pi/2021/12/23/1640263616dc5d02e7fdb5f394b32dcf2ef278c2f8_thumbnail_900x.webp",
      },
      {
        name: "Note2",
        title: "title",
        description: "purple",
        img: "https://img.ltwebstatic.com/images3_pi/2021/12/23/164026363799039e6f36745c86839004e21628af95_thumbnail_900x.webp",
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
