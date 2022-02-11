const express = require("express");
var router = express.Router();

const User = require("./../models/UserModel");
const TripModel = require("./../models/TripModel");
const ActivityModel = require("./../models/ActivityModel");
const DayModel = require("./../models/DayModel");
const uploader = require("./../config/uploader");
const isAuthenticated = require("../middlewares/jwt.middleware");

router.get("/", (req, res, next) => {
  TripModel.find()
    .populate("days")
    .populate("author")
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  TripModel.findById(req.params.id)
    .populate({
      path: "days",
      model: DayModel,
      populate: { path: "activities", model: ActivityModel },
    })
    .populate("author")
    .populate("categories")
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch(next);
});

router.patch(
  "/:id",
  uploader.single("image"),
  isAuthenticated,
  async (req, res, next) => {
    const days = JSON.parse(req.body.days);
    const image = req.file?.path || undefined;
    const daysIds = [];
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>DAYS >>>>>>>><", days);

    const allPromises = days.map(async (day, i) => {
      try {
        // For each day an array of activities. insert many days of activities
        for (let activity of day.activities) {
          console.log("activity :", activity);
          await ActivityModel.findByIdAndUpdate(activity._id, activity);
        }
        // const activitiesForDb = await ActivityModel.insertMany(day);
        const ids = day.activities.map((activity) => activity._id);
        // map on activities and each activity of the array has an id

        // const dayForDb = { number: i + 1, activities: ids }; // nbr of the day and (ids of) its activities
        const newDay = await DayModel.findByIdAndUpdate(day._id, day, {
          new: true,
        });
        console.log("day :", day);
        daysIds.push(newDay._id.toString()); // push day in daysIds
      } catch (err) {
        console.error(err);
      }
    });
    Promise.all(allPromises)
      .then(async () => {
        const trip = {
          title: req.body.title,
          categories: req.body.categories,
          location: req.body.location,
          description: req.body.description,
          image,
          days: daysIds,
          author: req.payload._id,
        };
        await TripModel.findByIdAndUpdate(req.params.id, trip);
        res.status(201).json({ message: "All good " });

        console.log("---- B/ DAYS :", days);
        console.log("---- 3/ DAYS Ids :", daysIds);
        console.log("---- TRIP :", trip);
      })
      .catch((e) => res.status(500).json({ error: e }));

    //res.send("ok");
  }
);

router.post(
  "/",
  uploader.single("image"),
  isAuthenticated,
  async (req, res, next) => {
    const days = JSON.parse(req.body.days);
    const image = req.file?.path || undefined;
    const daysIds = [];

    const allPromises = days.map(async (day, i) => {
      try {
        // For each day an array of activities. insert many days of activities
        const activitiesForDb = await ActivityModel.insertMany(day);
        const ids = activitiesForDb.map((activity) => activity._id);
        // map on activities and each activity of the array has an id

        const dayForDb = { number: i + 1, activities: ids }; // nbr of the day and (ids of) its activities
        const newDay = await DayModel.create(dayForDb);
        daysIds.push(newDay._id.toString()); // push day in daysIds
      } catch (err) {
        console.error(err);
      }
    });
    Promise.all(allPromises)
      .then(async () => {
        const trip = {
          title: req.body.title,
          categories: req.body.categories,
          location: req.body.location,
          description: req.body.description,
          image,
          days: daysIds,
          author: req.payload._id,
        };
        await TripModel.create(trip);
        res.status(201).json({ message: "All good " });

        console.log("---- B/ DAYS :", days);
        console.log("---- 3/ DAYS Ids :", daysIds);
        console.log("---- TRIP :", trip);
      })
      .catch((e) => res.status(500).json({ error: e }));

    //res.send("ok");
  }
);

module.exports = router;
