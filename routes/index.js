const express = require("express");
var router = express.Router();
const protectRoute = require("../middlewares/protectRoute");
const Trip = require("./../models/TripModel");
const Day = require("./../models/DayModel");
const Activity = require('../models/ActivityModel')
const User = require("./../models/UserModel");

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
    .then((dbRes) => {
      console.log("this is back:", dbRes);
      res.status(200).json(dbRes);
    })
    .catch(next);
});



router.post("/trips", uploader.single("image"), async (req, res, next) => {
  const image = req.file?.path || undefined;
  //const {title, categories, location, description, image, day, activityTitle, address, activityDescription } = req.body


  console.log('REQ_BODY', req.body)
  return 
  // const data = req.body
  // req.body = data or fd


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

  // const activity = {
  //    title: data.activityTitle,
  //    address : data.address,  
  //    description: data.activityDescription
  // }

  // const day ={ day : data.day }

  // const trip ={
  //   title : data.title,
  //   categories : data.categories,
  //   location : data.location,
  //   description : data.description,
  //   image,
  // }

//   try {
//     // for(let trip of trips){ // Just one trip. should I do a loop so ? forEach ? .map ?
//       const daysIds = []

//       for(let day of trip.days){ // days ?

//         const activitiesForDb = await Activity.create(activity)
//         const ids = activitiesForDb.map((activity) => activity._id)

        
//         const dayForDb = { 'number': day, 'activities': ids}
//         const newDay = await Day.create(dayForDb) // or day ?
//         daysIds.push(newDay._id)
//       }
      
//       trip.days = daysIds;       
//       trip.author = users[0]._id
//       const newTrip = await Trip.create(trip)
//     // }
//   process.exit()
// } catch (err) {
//   console.error (err)
// }

})
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



module.exports = router;


//     const createdActivity = await Activity.create(activity); 
//     res.status(201).json(createdActivity);
//   } catch (err) {
//     next(err);
//   }
// });

// router.post("/trips", uploader.single("image"), async (req, res, next) => {
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

// router.post("/trips", async (req, res, next) => {
// 	try {
// 		const createTrip = await Trip.create(req.body);
// 		res.status(201).json(createdTrip;
// 	} catch (e) {
// 		next(e);
// 	}
// }); 

