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

module.exports = router;
