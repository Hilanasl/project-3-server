var express = require("express");
const { get } = require("mongoose");
var router = express.Router();
const User = require("./../models/UserModel");
const Trip = require("./../models/TripModel");
const isAuthenticated = require('../middlewares/jwt.middleware');


/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});


router.patch('/users/favourites/:id', isAuthenticated, async (req, res, next) => {
  try {
    const user = await User.findOne({$and :[{id: req.payload._id}, { favourites: { $in: [req.params.id]}}]})
    if (user) {
      const updatedUser = await User.findByIdAndUpdate(req.payload._id, {
        $pull: {favourites: req.params.id}
      }, {new: true})
      res.status(200).json(updatedUser);
    }
  else {
    const updatedUser = await User.findByIdAndUpdate(req.payload._id, {
      $addToSet: {favourites: req.params.id}
  }, {new: true} )
      res.status(200).json(updatedUser);
}
} catch (err) {
  next(err)
}}
)



module.exports = router;
