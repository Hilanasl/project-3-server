const { Mongoose } = require('mongoose');
require('../../config/dbConfig');
const Trip = require('../../models/TripModel');
const Day = require('../../models/DayModel');
const Activity = require('../../models/ActivityModel')
const trips = require('./data');
const User = require('../../models/UserModel');


const seed  = async () => {
    
    try {
        await Trip.deleteMany()
        await Day.deleteMany()
        await Activity.deleteMany()

        const users = await User.find()

        //loop through the trips 
        for(let trip of trips){
            const daysIds = []

            //loop through the days within one trip to access the activity IDs
            for(let day of trip.days){
                const activitiesFromDb = await Activity.insertMany(day.activities)
                const ids = activitiesFromDb.map((activity) => activity._id)

                //destructure the day to replace activities with just their reference IDs,
                //then create the days and push the new day ID to an array for the trip to access
                const dayForDb = { 'number': day.number, 'activities': ids}
                const newDay = await Day.create(dayForDb)
                daysIds.push(newDay._id)
            }
            //change the trip so that the days/author become the reference ID
            //then create new trip 
            trip.days = daysIds;       
            trip.author = users[0]._id
            const newTrip = await Trip.create(trip)
        }
        process.exit()
    } catch (err) {
        console.error (err)
    }
}

seed()