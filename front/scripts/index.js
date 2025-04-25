const axios = require("axios");
const renderCards = require("./renderCards.js");
const submitForm = require("./submitForm.js");
const clearForm = require("./clearForm.js");
require("dotenv").config()


// document.addEventListener("DOMContentLoaded", () => {

//     $.get("https://students-api.up.railway.app/movies", (data) => {
//         renderCards(data);
//     });
// })

const apiUrl = process.env.NODE_ENV === "production"
        ? process.env.API_URL_PROD
        : process.env.API_URL

const fetchMovies = async () => {
        try {
                const movies = await axios.get(apiUrl);
                renderCards(movies.data);
        }

        catch (error) {
                alert("Las películas no fueron obtenidas correctamente")
                console.log(error);
        }
}

document.addEventListener("DOMContentLoaded", () => {
        if (document.getElementById("indexPage")) {
                fetchMovies()
        }

        if (document.getElementById("btnEnviar")) {
                document.getElementById("btnEnviar").addEventListener("click", submitForm);
        }

        if (document.getElementById("btnVaciar")) {
                document.getElementById("btnVaciar").addEventListener("click", clearForm);
        }
})

// Forma con promesas

// const apiUrl = "https://students-api.up.railway.app/movies";
// const movies = axios.get(apiUrl)

// movies



//success handler
//     .then((res) => {
//         renderCards(res.data)
//     })

// error handler
//     .catch((err) => {
//         console.log(err)
//     })


