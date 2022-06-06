'use strict';

const pokemonModel = require('./models/pokemon');
const userModel = require('./models/user');

const Data = {};

/**
 * @description This function is responsible for looking up all pokemon (search query is blank), or if it recieves a request, sends only one pokemon back.
 * @param {object} req - GET request from the front end.
 * @param {object} res a JSON object with all pokemon in our DB
 * @returns an object with an array of pokemon. Also returns a single pokemon if the user searches on the client side.
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

/**
 * @description The DB is actually just being updated, which allows this function to add and remove as needed.
 * @param {object} req request from the client
 * @param {object} res response from DB
 * @returns a pokemon object 
 */
Data.updateFavorites = async (req, res) => {
	try {
		console.log(`adding a new pokemon to favorites: ${req.body}`);
        let id = req.body._id
        console.log(`this is id:`, id)
		const data = req.body;
        console.log(`this is the value of data:`,data)
		const favorite = await userModel.findByIdAndUpdate(id, data);
		
		res.status(200).json(favorite);
	} catch (err) {
		console.error(err);
		res.send(err);
	}
};

/**
 * 
 * @param {object} req - request from client 
 * @param {object} res - response from database
 * @returns an object with the array of favorite pokemons.
 */
Data.showFavorites = async (req,res) => {
	try {
		console.log('request for favorites...');
		let query = req.query.params
		console.log('logging query', query);
		let favorites = await userModel.find(query);
		res.status(200).json(favorites);
		
	} catch (error) {
		console.error(error);
	}
}

// Exporting Data so that we can use the methods it in our server.js
module.exports = Data;
