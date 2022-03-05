const express = require('express');
const Tweet = require('../models/tweet');


const router = express.Router();

// Routes // 

router.get('/home', (req,res) => {
    Tweet.find({})
        .then((foundTweets) => {
            res.render('Index', {tweets: foundTweets});
        })
        .catch((error) => {
            res.status(400).json({error});
        })
})

module.exports = router;