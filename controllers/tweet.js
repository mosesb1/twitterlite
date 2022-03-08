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

// delete

router.delete('/home/:id', (req,res) => {
    Tweet.findByIdAndRemove(req.params.id)
        .then((deletedTweet) => {
            res.redirect('/home');
        })
        .catch((error) => {
            console.log(error);
            res.json({error})
        })
})

// update

router.put('/home/:id', (req,res) => {
    Tweet.findByIdAndUpdate(req.params.id, req.body)
        .then((updatedFruit) => {
            res.redirect(`/home/${req.params.id}`)
        })
        .catch((error) => {
            console.log(error);
            res.json({error});
        })
})

// create

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

// edit

router.get('/:id/edit', (req,res) => {
    Tweet.findById(req.params.id)
        .then((foundTweet)=>{
            res.render('Edit', {tweet: foundTweet});
        })
        .catch((error) => {
            console.log(error);
            res.json({error});
        })
})

// show

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