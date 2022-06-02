/**
 * @file users.js
 * @description a schema for a user profile
 */
'use strict';

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    favorites: Object
});


const User = mongoose.model('User', userSchema);

module.exports = User;