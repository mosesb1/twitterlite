const mongoose = require('./connection');
const Tweet = require('./tweet');

const db = mongoose.connection;

db.on('open', () => {
    const startTweets = [
        {content: 'hello world'}
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