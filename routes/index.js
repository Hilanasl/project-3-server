const express = require("express");
var router = express.Router();
const protectRoute = require("../middlewares/protectRoute");
const Trip = require("./../models/TripModel");
const Day = require("./../models/DayModel");
const User = require("./../models/UserModel");
const Activity = require("./../models/ActivityModel");


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/trips", (req, res, next) => {
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
    .populate("days")
    .populate("author")
    .populate('image')
    .then((dbRes) => {
      console.log("this is back:", dbRes);
      res.status(200).json(dbRes);
    })
    .catch(next);
});

// router.get("/trips/:id", (req, res, next) => {
//   Day.findById(req.params.id)
//     .populate("activities")
//     .then((dbRes) => {
//       console.log("this is back:", dbRes);
//       res.status(200).json(dbRes);
//     })
//     .catch(next);
// });

module.exports = router;
