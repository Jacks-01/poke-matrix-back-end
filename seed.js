/**
 * @file seed.js
 * @description creates a new pokemon document for each response from the server. Seeds the database so I have the data to manipulate.
 */
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

const axios = require('axios').default;

async function seed() {

    let pokemonArray = [];
    await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1200')
        .then((res) => {
            console.log(res.data.results)
            let pokemonArray = res.data.results;
            console.log('this is our pokemon array:', pokemonArray);
            for (let i = 0; i < pokemonArray.length; i++) {
                handleEachPokemon(pokemonArray[i].name, pokemonArray[i].url);
                
                }
                
        }).catch((err) => {
            console.error(err);
        });
    
}

async function handleEachPokemon(name, url){

    console.log(`handling ${name}`);
    await axios.get(url)
    .then((res) => {
        // console.log(`creating object for ${name}...`);
        let name = res.data.name;
        let types = res.data.types;
        let forms = res.data.forms;
        let id = res.data.id;
        let sprites = res.data.sprites;
        let weight = res.data.weight;
        let height = res.data.height;
        let stats = res.data.stats;
        let abilities = res.data.abilities;
        let moves = res.data.moves;

        Pokemon.create({
            name: name,
            types: types,
            forms: forms,
            id: id,
            sprites: sprites,
            weight: weight,
            height: height,
            stats: stats,
            abilities: abilities,
            moves: moves
        });

    }).catch((err) => {
        console.error(err);
    });
};



seed();
