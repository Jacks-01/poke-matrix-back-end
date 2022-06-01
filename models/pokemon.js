/**
 * @file pokemon.js
 * @description pokemon schema for mongoDB
 */

'use strict';
const mongoose = require('mongoose');

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

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;