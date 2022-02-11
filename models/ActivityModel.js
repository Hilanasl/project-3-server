const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  title: String,
  address: String,
  description: String,
  //   coords: { type: "Point" },
});

const ActivityModel = mongoose.model("activities", activitySchema);

module.exports = ActivityModel;
