const mongoose = require('./connection');
const Tweet = require('./tweet');

const db = mongoose.connection;

db.on('open', () => {
    const startTweets = [
        {content: 'hello world', username: 'computer'},
        {content: 'bro, i am straight up not having a good time', username: 'fratguy123'},
        {content: 'u bum', username: 'kingjames'},
        {content: 'I no longer have a manager. I can\'t be managed', username: 'kanyewest'}
    ];

    Tweet.deleteMany({})
        .then((deletedTweets) => {
            Tweet.create(startTweets)
                .then((newTweets) => {
                    db.close();
                })
                .catch((error) => {
                    console.log(error);
                    db.close();
                })
        })
        .catch((error) => {
            console.log(error);
            db.close();
        })
});