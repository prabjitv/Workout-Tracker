const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutplan = new Schema({
  date: { type: Date, default: Date.now },
  name: String,
  exercise: {
    name: String,
    type: String,
    weight: { type: Number },
    sets: { type: Number },
    reps: { type: Number },
    duration: { type: Number },
    distance: { type: Number }
  }
});

let Workoutplan = mongoose.model("Workoutplan", workoutplan);

module.exports = Workoutplan;

