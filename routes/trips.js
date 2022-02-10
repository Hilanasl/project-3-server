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

router.post(
  "/",
  uploader.single("image"),
  isAuthenticated,
  async (req, res, next) => {
    console.log("-----REQ_BODY", req.body);
    const days = JSON.parse(req.body.days);
    console.log(days);
    const image = req.file?.path || undefined;

    console.log("----- REQ BODY is :", req.body);

    const daysIds = [];

    days.forEach(async (day, i) => {
      try {
        // For each day an array of activities. insert many days of activities
        const activitiesForDb = await ActivityModel.insertMany(day);
        const ids = activitiesForDb.map((activity) => activity._id);
        // map on activities and each activity of the array has an id

        const dayForDb = { number: i + 1, activities: ids }; // nbr of the day and (ids of) its activities
        const newDay = await DayModel.create(dayForDb);
        //console.log("newDay here : ", i, newDay._id.toString());
        daysIds.push(newDay._id.toString()); // push one day in daysIds

        //   trip.days = daysIds;
        //   await TripModel.create(trip);
      } catch (err) {
        console.error(err);
      }
    });

    //res.send("ok");

    const trip = {
      title: req.body.title,
      categories: req.body.categories,
      location: req.body.location,
      description: req.body.description,
      image,
      days: daysIds, //  EMPTY ARRAY
      author: req.payload._id,
    };
    //   trip.days = daysIds;

    console.log("---- TRIP :", trip); // days : EMPTY ARRAY
    console.log("---- DAYS :", days); // j'ai mes 2 jours et 3 activités - OK
    console.log("---- DAYS Ids :", daysIds); // EMPTY ARRAY

    await TripModel.create(trip);

    res.status(201).json({ message: "All good in the hood" });
  }
);

// days of a trip will be days ids
// trip.author = users[0]._id   <--- comme ça dans SEED
// trip.author = req.session.currentUser._id; <-- Maybe ??
// newTrip.author = req.session.currentUser._id
// const newTrip =

// newTrip.author = req.session.currentUser._id
// trip.author = req.session.currentUser._id

// POST trip
// récupérer la donnée du form, les reformater.
// créer un objet activité
// créer un objet day et un objet trip ?

// data = {
//   title : '',
//   description: '',
//   ...
//   activityTitle: '',
//   activityDescription
// }

// activity = {
//   title: data.activityTitle,
//   description: data.activityDescription
// }

// 1/ créer les activités
// 2/ les jours
// 3/ les trips dans la base de donnée

// Activity.create(activity)

// const data = {
//   // TRIP
//   "title" : title,
//   "categories" : categories,
//   "location" : location,
//   "description" : description,
//   "image" : image.current.files, // ??
//   // DAY
//   "day" : day,
//   // ACTIVITY
//   "activityTitle" :activityTitle,
//   "address" : address,
//   "activityDescription" : activityDescription,
// }

//     const createdActivity = await Activity.create(activity);
//     res.status(201).json(createdActivity);
//   } catch (err) {
//     next(err);
//   }
// });

// router.post("/", uploader.single("image"), async (req, res, next) => {
//   const image = req.file?.path || undefined;
//   try {
//     const createdTrip = await Trip.create({
//       ...req.body,
//       image,
//     });
//     res.status(201).json(createdTrip);
//   } catch (err) {
//     next(err);
//   }
// });

// router.post("/", async (req, res, next) => {
// 	try {
// 		const createTrip = await Trip.create(req.body);
// 		res.status(201).json(createdTrip;
// 	} catch (e) {
// 		next(e);
// 	}
// });

module.exports = router;
