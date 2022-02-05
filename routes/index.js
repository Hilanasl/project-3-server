const express = require("express");
var router = express.Router();
const protectRoute = require("../middlewares/protectRoute");
const Trip = require('./../models/TripModel');
const Day = require('./../models/DayModel');
const User = require('./../models/UserModel');



/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get('/trips', (req, res, next) => {
	Trip.find()
		.populate('days')
		.populate('author')
		.then((dbRes) => {
			res.status(200).json(dbRes);
		})
		.catch(next);
});

module.exports = router;
