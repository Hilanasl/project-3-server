const mongoose = require("mongoose");
require("dotenv").config();

console.log("trying to connect to", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then((db) => console.log("DB connected"))
  .catch((e) => console.error(e));
