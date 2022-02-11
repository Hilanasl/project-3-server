const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  title: String,
  address: String,
  description: String,
  coords: { type: String, enum: ["Point"], coordinates: [Number] },
});

const ActivityModel = mongoose.model("activities", activitySchema);

module.exports = ActivityModel;
