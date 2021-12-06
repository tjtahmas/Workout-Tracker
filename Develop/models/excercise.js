const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const excerciseSchema = new Schema({
    //name
    name: {
        type: String,
        trim: true,
        required: "Enter a name for the excercise"
    },
    //type
    type: {
        type: String,
        trim: true,
        required: "Enter a type for the excercise"
    },
    //weight
    weight: {
        type: Number,
    },
    //sets
    sets: {
        type: Number,
    },
    //reps
    reps: {
        type: Number,
    },
    //duration
    duration: {
        type: Number,
    },
    //If Cardio, track distance traveled
    distance: {
        type: Number,
    }
});

const Excercise = mongoose.model("Excercise", excerciseSchema);

module.exports = Excercise;