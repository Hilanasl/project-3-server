const express = require("express");
var router = express.Router();
const protectRoute = require("../middlewares/protectRoute");
const Trip = require("./../models/TripModel");
const Day = require("./../models/DayModel");
const User = require("./../models/UserModel");
const Activity = require("./../models/ActivityModel");
const TripModel = require("./../models/TripModel");
const ActivityModel = require("./../models/ActivityModel");
const DayModel = require("./../models/DayModel");
const isAuthenticated = require("./../middlewares/jwt.middleware");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/trips", isAuthenticated, (req, res, next) => {
  console.log(req.payload.username);
  Trip.find()
    .populate("days")
    .populate("author")
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch(next);
});

router.get("/trips/:id", (req, res, next) => {
  Trip.findById(req.params.id)
    .populate({
      path: "days",
      model: DayModel,
      populate: { path: "activities", model: ActivityModel },
    })
    .populate("author")
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch(next);
});

module.exports = router;
