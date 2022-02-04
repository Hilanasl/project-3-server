const { Mongoose } = require('mongoose');
require('../../config/dbConfig');
const Activity = require('../../models/ActivityModel');

const activities = [
    {
        title: 'Tour Eiffel visit',
        address: 'Tour Eiffel, Champ de Mars, Paris, 75016',
        description: 'Very nice tower but lots of tourists',
    },
    {
        title: 'Morning museum visit',
        address: 'Musee Picasso, Marais, 75003',
        description: 'Very nice museum for a morning jaunt',
    },
    {
        title: 'Champs Elysees',
        address: 'Champs Elysees, Paris, 75001',
        description: 'Too many big expensive shops, crowds and not enough trees'
    },
    {
        title: 'Museum Louvre trip',
        address: 'Musee Louvre, central Paris, 75002',
        description: 'Super cool, saw the Mona Lisa'
    }
]

Activity.create(activities)
    .then((response) => {
        console.log('Created' + response.length + 'activities')
        process.exit()
    })
    .catch ((err) => console.log(err))