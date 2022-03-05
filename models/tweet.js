const mongoose = require('./connection');

const {Schema, model} = mongoose;

const tweetsSchema = new Schema({
    content: String
})

const Tweet = model('Tweet', tweetsSchema);

module.exports = Tweet;