const mongoose = require('./connection');
const User = require('./user');

const db = mongoose.connection;

db.on('open', () => {

    User.deleteMany({})
        .then((deletedTweets) => {
            console.log('users deleted');
            db.close();
        })
        .catch((error) => {
            console.log(error);
            db.close();
        })
});