const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutplan = new Schema({
  date: new Date(),
  name: String,
  exercise: {
    name: String,
    type: String,
    weight: number,
    sets: number,
    reps: number,
    duration: number,
    distance: number
  }
});

