const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const tripSchema = new Schema(
    {
        title: String,
        location: String,
        categories: {
            enum: ['budget', 'comfortable', 'luxury', 'family', 'adventure', 'culture', 'shopping', 'romantic', 'party', 'gastronomic', 'nature']
        },
        description: String,
        image: [String],
        days: [{ type: Schema.Types.ObjectId, ref: 'days' }],
        author: { type: Schema.Types.ObjectId, ref: 'users' }
    }
);

const TripModel = mongoose.model("trips", tripSchema);

module.exports = TripModel;
