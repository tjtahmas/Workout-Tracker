const router = require("express").Router();
const Exercise = require("../models/Workout.js");
const path = require('path');

router.post("/api/exercise", ({ body }, res) => {
  Exercise.create(body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/exercise/bulk", ({ body }, res) => {
  Exercise.insertMany(body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  console.log('In the Workout API Get route')
  Exercise.aggregate([
    {
      $addFields:{
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }
  ])
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log('In the Workout API Post route')
  Exercise.findByIdAndUpdate(req.params.id, {$push:{exercises:req.body}}, {new: true})
  .then(dbExercise => {
    res.json(dbExercise);
  })
  .catch(err => {
    res.status(400).json(err);
  })
}); 

// VIEW ROUTES
router.get('/exercise', (req,res) => {
  console.log('In the /excercise route');
  try {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  } catch (err) {
    res.status(500).json(err)
  };
});

router.get('/stats', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  } catch (err) {
    res.status(500).json(err)
  };
});



module.exports = router;
