const mongoose = require('./connection');

const {Schema, model} = mongoose;

const tweetsSchema = new Schema({
    content: String,
    username: String,
    img: {
        type: String,
        required: false
    },
    likes: [
        {
            type: String,
            required: false,
        }
    ]
})

const Tweet = model('Tweet', tweetsSchema);

module.exports = Tweet;