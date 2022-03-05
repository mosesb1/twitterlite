const express = require('express');
const { append } = require('express/lib/response');
const Tweet = require('../models/tweet');


const router = express.Router();

// Routes // 

// index //
router.get('/home', (req,res) => {
    Tweet.find({})
        .then((foundTweets) => {
            res.render('Index', {tweets: foundTweets});
        })
        .catch((error) => {
            res.status(400).json({error});
        })
})

// new //

router.get('/new', (req,res) => {
    res.render('New');
})

router.post('/home', (req,res) => {
    Tweet.create(req.body)
        .then((tweets) => {
            res.redirect('/home');
        })
        .catch((error) => {
            console.log(error);
            res.json({error});
        })
})

router.get('/home/:id', (req,res) => {
    Tweet.findById(req.params.id)
        .then((foundTweet) => {
            res.render('Show', {tweet: foundTweet});
        })
        .catch((error) => {
            console.log(error);
            res.json({error});
        })
})

module.exports = router;