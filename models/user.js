const mongoose = require('./connection');

const {Schema,model} = mongoose;

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    followers: [
        {
            type: String,
            required: false
        }
    ],
    following: [
        {
            type: String,
            required: false
        }
    ]
});

const User = model("User", userSchema);

module.exports = User;