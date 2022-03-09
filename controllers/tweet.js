const express = require('express');
const Tweet = require('../models/tweet');


const router = express.Router();

router.use((req,res,next) => {
    if(req.session.loggedIn) {
        next();
    } else {
        res.redirect("/user/login");
    }
})

// Routes // 

// index //

router.get('/', (req,res) => {
    Tweet.find({})
        .then((foundTweets) => {
            res.render('tweets/Index', {tweets: foundTweets});
        })
        .catch((error) => {
            res.status(400).json({error});
        })
})

// new //

router.get('/new', (req,res) => {
    res.render('tweets/New');
})

// delete

router.delete('/:id', (req,res) => {
    Tweet.findByIdAndRemove(req.params.id)
        .then((deletedTweet) => {
            res.redirect('/tweets');
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({error})
        })
})

// update

router.put('/:id', (req,res) => {
    Tweet.findByIdAndUpdate(req.params.id, req.body)
        .then((updatedFruit) => {
            res.redirect(`/tweets/${req.params.id}`)
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({error});
        })
})

// create

router.post('/', (req,res) => {
    Tweet.create(req.body)
        .then((tweets) => {
            res.redirect('/tweets');
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({error});
        })
})

// edit

router.get('/:id/edit', (req,res) => {
    Tweet.findById(req.params.id)
        .then((foundTweet)=>{
            res.render('tweets/Edit', {tweet: foundTweet});
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({error});
        })
})

// show

router.get('/:id', (req,res) => {
    Tweet.findById(req.params.id)
        .then((foundTweet) => {
            res.render('tweets/Show', {tweet: foundTweet});
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({error});
        })
})

module.exports = router;