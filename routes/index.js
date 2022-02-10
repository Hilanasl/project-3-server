const express = require("express");
var router = express.Router();
const protectRoute = require("../middlewares/protectRoute");
const UserModel = require("./../models/UserModel");
const TripModel = require("./../models/TripModel");
const ActivityModel = require("./../models/ActivityModel");
const DayModel = require("./../models/DayModel");
const isAuthenticated = require("./../middlewares/jwt.middleware");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// router.get("/trips", (req, res, next) => {
//   TripModel.find()
//     .populate("days")
//     .populate("author")
//     .then((dbRes) => {
//       res.status(200).json(dbRes);
//     })
//     .catch(next);
// });

// router.get("/trips/:id", (req, res, next) => {
//   TripModel.findById(req.params.id)
//     .populate({
//       path: "days",
//       model: DayModel,
//       populate: { path: "activities", model: ActivityModel },
//     })
//     .populate("author")
//     .then((dbRes) => {
//       res.status(200).json(dbRes);
//     })
//     .catch(next);
// });

module.exports = router;
