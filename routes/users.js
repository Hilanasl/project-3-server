var express = require("express");
const { get } = require("mongoose");
var router = express.Router();
const UserModel = require("./../models/UserModel");
const TripModel = require("./../models/TripModel");
const isAuthenticated = require('../middlewares/jwt.middleware');
const DayModel = require('../models/DayModel');


/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});


router.patch('/favourites/:id', isAuthenticated, async (req, res, next) => {
  try {
    const user = await UserModel.findOne({$and :[{_id: req.payload._id}, { favourites: { $in: [req.params.id]}}]})
    console.log(user)
    if (user) {
      const updatedUser = await UserModel.findByIdAndUpdate(req.payload._id, {
        $pull: {favourites: req.params.id}
      }, {new: true});
      const updatedTrip = await TripModel.findByIdAndUpdate(req.params.id, {
      $pull: {favedBy: req.payload._id}
      }, {new: true});
      // console.log('trip removed', updatedTrip)
      res.status(200).json({updatedUser, updatedTrip});
      console.log('user faves remove', updatedUser.favourites)
      // res.status(200).json(updatedTrip);
      // console.log('trip', updatedTrip)
    }
  else {
    const updatedUser = await UserModel.findByIdAndUpdate(req.payload._id, {
      $addToSet: {favourites: req.params.id}
  }, {new: true} );
    const updatedTrip = await TripModel.findByIdAndUpdate(req.params.id, {
    $addToSet: {favedBy: req.payload._id}
    }, {new: true} );
    console.log('user faves add', updatedUser)
      res.status(200).json({updatedUser, updatedTrip});
      // res.status(200).json(updatedTrip);
}
} catch (err) {
  next(err)
}}
)

router.get('/profile/faves', isAuthenticated, async (req, res, next) => {
  try {
    const userWithFaves = await UserModel.findById(req.payload._id)
    .populate({
      path:'favourites',
      model: TripModel,
      populate: { path: "days", model: DayModel },
    })
    res.status(200).json(userWithFaves)
  } catch (err) {
    next(err)
  }
})

router.get('/profile/added', isAuthenticated, async (req, res, next) => {
  try {
    const addedByUser = await TripModel.find({author: req.payload._id})
    .populate('author')
    res.status(200).json(addedByUser)
  } catch (err) {
    next(err)
  }
})



module.exports = router;
