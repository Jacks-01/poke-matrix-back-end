/**
 * @file pokemon.js
 * @description pokemon schema for mongoDB
 */

'use strict';
// using mongoose
const mongoose = require('mongoose');

// creating a new Schema with mongoose
const pokemonSchema = new mongoose.Schema({
    	
abilities: Array,
forms: Array,
height: Number,
id: Number,
moves: Array,
name:	String,
species: Object,
sprites: Object,
stats: Array,
types: Array,
weight:	Number,
});

// setting a variable equal to our schema for quick referencing.
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

// exporting our schema so that we can use it elsewhere.
module.exports = Pokemon;