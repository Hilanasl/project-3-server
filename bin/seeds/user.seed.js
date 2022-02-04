const { Mongoose } = require('mongoose');
require('../../config/dbConfig');
const User = require('../../models/UserModel');

const users = [
    {
        name: 'Anna',
        username: 'annab',
        email: 'anna@annab.com',
        password: '1234'
    },
    {
        name: 'Hilana',
        username: 'hilanas',
        email: 'hilana@hilanas.com',
        password: '1234'
    },
    {
        name: 'Alix',
        username: 'alixv',
        email: 'alix@alixv.com',
        password: '1234'
    },
]

User.deleteMany()
    .then((response) => {
        User.create(users)
        .then((response) => {
            console.log('Created' + response.length + 'users')
            process.exit()
        })
    })
    .catch ((err) => console.log(err))
    

