const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const daySchema = new Schema(
    {
        number: Number,
        activities: [{ type: Schema.Types.ObjectId, ref: 'activities' }],
    }
);

const DayModel = mongoose.model("days", daySchema);

module.exports = DayModel;