const router = require("express").Router();
const Excercise = require("../models/excercise.js");

router.post("/api/excercise", ({ body }, res) => {
  Excercise.create(body)
    .then(dbExcercise => {
      res.json(dbExcercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/excercise/bulk", ({ body }, res) => {
  Excercise.insertMany(body)
    .then(dbExcercise => {
      res.json(dbExcercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/excercise", (req, res) => {
  Excercise.find({})
    .sort({ date: -1 })
    .then(dbExcercise => {
      res.json(dbExcercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
