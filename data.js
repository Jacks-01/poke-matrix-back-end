'use strict';

const pokemonModel = require('./models/pokemon');

const Data = {};

/**
 * 
 * @param {object} req - GET request from the front end.
 * @param {object} res a JSON object with all pokemon in our DB
 */
Data.getAllPokemon = async(req,res) => {
    try {
        const filterQuery = {};
        if (req.query.name) {
            filterQuery.name = req.query.name;
        }
        console.log(`you are in getAllPokemon ${filterQuery}`);
        const allPokemon = await pokemonModel.find(filterQuery, 'name id sprites.front_default').exec();
        res.status(200).json(allPokemon);

    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

// Data.getOnePokemon = async(req, res) => {

// }

// Exporting Data so that we can use the methods it in our server.js
module.exports = Data