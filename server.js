/**
 * @file server.js
 * @description contains the routes to recieve requests from front-end.
 */
'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const Data = require('./data');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.on('error', (err) => {
    console.error(`DB ERROR: ${err}`);
})

db.once('open', () => {
    console.log(`Connected to the database`);
})


app.get('/pokemon', Data.getAllPokemon);

app.listen(PORT, () => {
    console.log(`you are listening on ${PORT}`)
});
