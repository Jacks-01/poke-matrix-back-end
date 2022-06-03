'use strict';

const pokemonModel = require('./models/pokemon');
const userModel = require('./models/user');

const Data = {};

/**
 *
 * @param {object} req - GET request from the front end.
 * @param {object} res a JSON object with all pokemon in our DB
 */
Data.getAllPokemon = async (req, res) => {
	try {
		const filterQuery = {};
		if (req.query.name) {
			filterQuery.name = req.query.name;
		}
		console.log(`you are in getAllPokemon ${filterQuery}`);
		const allPokemon = await pokemonModel
			.find(filterQuery, 'name id sprites.front_default height weight')
			.exec();
		res.status(200).json(allPokemon);
	} catch (err) {
		console.log(err);
		res.send(err);
	}
};

Data.addToFavorites = async (req, res) => {
	try {
		console.log(`adding a new pokemon to favorites: ${JSON.stringify(req.body)}`);
		const data = req.body;
        console.log(`this is the value of data:`,data)
		const favorite = new userModel(data);
		await favorite.save();
		res.status(200).json(favorite);
	} catch (err) {
		console.error(err);
		res.send(err);
	}
};

// Exporting Data so that we can use the methods it in our server.js
module.exports = Data;
