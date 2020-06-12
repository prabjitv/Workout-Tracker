const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/heroku_0pwhbz14", {
  useNewUrlParser: true,
  useCreateIndex: true
});

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});


