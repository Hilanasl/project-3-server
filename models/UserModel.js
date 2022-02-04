const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema(
    {
        name: String,
        username: String,
        email: { type: String, unique: true },
        password: String,
        favourites: [{ type: Schema.Types.ObjectId, ref: 'trips' }]
    }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;