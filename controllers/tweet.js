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
            res.json({error});
        })
})
router.get('/mytweets', (req,res) => {
    Tweet.find({username: req.session.username})
        .then((foundTweets) => {
            res.render('tweets/Index', {tweets: foundTweets});
        })
        .catch((error) => {
            res.json({error});
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
            res.redirect('/tweets/mytweets');
        })
        .catch((error) => {
            console.log(error);
            res.json({error})
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
            res.json({error});
        })
})

// create

router.post('/', (req,res) => {
    req.body.username = req.session.username;
    Tweet.create(req.body)
        .then((tweets) => {
            res.redirect('/tweets/mytweets');
        })
        .catch((error) => {
            console.log(error);
            res.json({error});
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
            res.json({error});
        })
})

// show

router.get('/:id', (req,res) => {
    Tweet.findById(req.params.id)
        .then((foundTweet) => {
            res.render('tweets/Show', {tweet: foundTweet, username: req.session.username});
        })
        .catch((error) => {
            console.log(error);
            res.json({error});
        })
})

module.exports = router;