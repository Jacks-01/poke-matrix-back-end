'use strict';

const pokemonModel = require('./models/pokemon');

const Data = {};

Data.getAllPokemon = async(req,res) => {
    try {
        const allPokemon = await pokemonModel.find({});
        res.status(200).json(allPokemon);

    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

// Data.getOnePokemon = async(req, res) => {

// }
module.exports = Data