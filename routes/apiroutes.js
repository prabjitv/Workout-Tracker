const db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workoutplan.find({})
      .then(data => {
        res.json(data);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workoutplan.find({})
      .then(data => {
        res.json(data);
      });
  })

  app.post("/api/workouts", (req, res) => {
    db.Workoutplan.create(req.body)
      .then(data => {
        res.json(data);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workoutplan.updateOne({ _id: req.params.id }, { $push: { exercises: req.body } })
      .then(data => {
        res.json(data);
      });
  });


}