const { Mongoose } = require('mongoose');
require('../../config/dbConfig');
const Day = require('../../models/DayModel');
const Activity = require('../../models/ActivityModel');
const ObjectId = require('mongodb').ObjectID;

const days = [
    {
        number: 1,
        activities: [, ]
    },
    {
        number: 2,
        activities: [, ]
    },
]

Activity.find()
Day.create(days)
    .then((response) => {
        console.log('Created' + response.length + 'days')
        process.exit()
    })
    .catch ((err) => console.log(err))






trips.forEach(trip => {
    days.forEach(async day => {
        // put all the activities in the db
        const act = await DB.insertMany(activities)
        // get all the activities wWITH _ID from the db
        const
    })
})
//// START AGAIN




const activities = [{
    key : tripNameDay
}
const days 