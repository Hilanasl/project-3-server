var express = require('express');
var router = express.Router();
const UserModel = require("./../models/UserModel");
const TripModel = require("./../models/TripModel");
const isAuthenticated = require('../middlewares/jwt.middleware');
const DayModel = require('../models/DayModel');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.patch('/users/favourites/:id', isAuthenticated, async (req, res, next) => {
  try {
    const user = await UserModel.findOne({$and :[{id: req.payload._id}, { favourites: { $in: [req.params.id]}}]})
    if (user) {
      const updatedUser = await UserModel.findByIdAndUpdate(req.payload._id, {
        $pull: {favourites: req.params.id}
      }, {new: true})
      res.status(200).json(updatedUser);
    }
  else {
    const updatedUser = await UserModel.findByIdAndUpdate(req.payload._id, {
      $addToSet: {favourites: req.params.id}
  }, {new: true} )
      res.status(200).json(updatedUser);
}
} catch (err) {
  next(err)
}}
)

router.get('/users/profile', isAuthenticated, async (req, res, next) => {
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



module.exports = router;
