const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/project-module-3")
  .then((db) => console.log("DB connected"))
  .catch((e) => console.error(e));
