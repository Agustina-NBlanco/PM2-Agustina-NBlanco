const Movie = require("../models/Movie");

module.exports = {
    getMovies: async () => {
        try {
            const movies = await Movie.find();
            return movies;
        }
        catch (error) {
            console.log(error);
        }

    },

    createMovie: async (movie) => {
        try {
            const newMovie = await Movie.create(movie);
            return newMovie;
        }
        catch (err) {
            console.log(err.message);
            throw err;
        }
    }
};


