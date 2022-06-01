/**
 * @file pokemon.js
 * @description pokemon schema for mongoDB
 */

'use strict';
const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    	
abilities: Array,
base_experience: Number,
forms: Array,
game_indices: Array,
height: Number,
held_items:	Array,
id: Number,
is_default:	Boolean,
location_area_encounters:	String,
moves: Array,
name:	String,
order: Number,
past_types:	Array,
species: Object,
sprites, Object,
stats: Array,
types: Array,
weight:	Number,
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;