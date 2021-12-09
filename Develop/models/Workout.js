const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        required: "Enter the date",
        default: () => new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter a type for the exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a name for the exercise"
            },
            duration: {
                type: Number,
                required: "Enter a duration for the exercise"
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;