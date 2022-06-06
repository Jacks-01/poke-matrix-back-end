# Poke-Matrix Back End
    - App is hosted via heroku

# Description
    - The back end is responsible for being the middleman between the client and the mongoDB. The mongoDB contains all of the pokemon as well as the user.


# Packages

    - Node.js
    - Mongoose
    - MongoDB
    - Express
    - Body-Parser
    - dotenv (you will need the key to the mongoDB in order to use it)
    - Axios

# Schemas

 -Pokemon:

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

____________________________________

    - User: 

    username: String,
    password: String,
    favorites: Object