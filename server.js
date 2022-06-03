/**
 * @file server.js
 * @description contains the routes to recieve requests from front-end.
 */
'use strict';

// All of our required packages
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const Data = require('./data');
const { get } = require('express/lib/response');

// telling our app to use express
const app = express();

// this our middleware so that our data can be decrypted.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// setting the port and mongoDB url
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

// throws an error if something went wrong when turning on mongo
db.on('error', (err) => {
    console.error(`DB ERROR: ${err}`);
})

// tells us when we are connected successfully
db.once('open', () => {
    console.log(`Connected to the database`);
})


// the route
app.get('/pokemon', Data.getAllPokemon);

app.post('/users', Data.addToFavorites);

//  server confirming it is live and what our port number is.
app.listen(PORT, () => {
    console.log(`you are listening on ${PORT}`)
});
