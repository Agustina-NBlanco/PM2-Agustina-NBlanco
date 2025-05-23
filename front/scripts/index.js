const axios = require("axios");
const renderCards = require("./renderCards.js");
const submitForm = require("./submitForm.js");
const clearForm = require("./clearForm.js");




// document.addEventListener("DOMContentLoaded", () => {

//     $.get("https://students-api.up.railway.app/movies", (data) => {
//         renderCards(data);
//     });
// })


const apiUrl = window.location.hostname === "localhost"
        ? "http://localhost:3000/movies"
        : "https://pm2-agustina-nblanco.onrender.com/movies"

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


