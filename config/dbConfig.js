const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then((db) => console.log("DB connected"))
  .catch((e) => console.error(e));
