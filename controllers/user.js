const express = require('express');
const Tweet = require('../models/tweet');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.get('/signup', (req,res) => {
    res.render("user/Signup");
});

router.use(express.static('public'));

router.post("/signup", async (req,res) => {
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    );

    User.create(req.body)
        .then((user) => {
            res.redirect('/user/login');
        })
        .catch((error) => {
            console.log(error);
            res.json({error});
        })
});

router.get("/login", (req,res) => {
    res.render('user/Login');
});

router.post("/login", (req,res) => {
    const {username, password} = req.body;

    User.findOne({username})
        .then(async (user) => {
            if(user) {
                const result = await bcrypt.compare(password, user.password);
                if(result){
                    req.session.username = username;
                    req.session.loggedIn = true;

                    res.redirect('/tweets/home');
                } else {
                    res.json({error: "password doesn't match"});
                }
            } else {
                res.json({error: "user doesn't exist"});
            }
        })
        .catch((error) => {
            console.log(error);
            res.json({error});
        })
});

router.get('/:user', (req,res) => {
    Tweet.find({username: req.params.user})
        .then((foundTweets) => {
            res.render('user/Show', {tweets: foundTweets, username: req.session.username});
        })
        .catch((error) => {
            console.log(error);
            res.json({error});
        })
})

router.get('/logout', (req,res) => {
    req.session.destroy((err) => {
        res.redirect('/');
    })
})

module.exports = router;