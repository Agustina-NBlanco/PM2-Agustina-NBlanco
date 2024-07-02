const axios = require("axios");

const title = document.getElementById("title");
const year = document.getElementById("year");
const director = document.getElementById("director");
const duration = document.getElementById("duration");
const genre = document.getElementById("genre");
const rate = document.getElementById("rate");
const poster = document.getElementById("poster");


const apiUrl = "http://localhost:3000/movies";


const submitForm = async (event) => {
    event.preventDefault()

    if (!(title.value && year.value && director.value && duration.value && genre.value && rate.value && poster.value)) {
        alert("Todos los campos son obligatorios");
        return;
    }
    else {
        alert("Los campos estaban completos");
    }
    if (year.value.length !== 4) {
        alert("El año debe ser de 4 digitos");
        return;
    }
    if (rate.value < 0 || rate.value > 10) {
        alert("La puntuación debe ser entre 0 y 10");
        return;
    }
    if (!(poster.value.includes("https://") || poster.value.includes("http://"))) {
        alert("La url de la imagen no es valida");
        return
    }
    if (!(poster.value.includes(".jpg") || poster.value.includes(".png") || poster.value.includes(".jpeg"))) {
        alert("La imagen debe ser JPG, PNG o JPEG");
        return
    }

    try {
        const res = await axios.post(apiUrl, {

            title: title.value,
            year: year.value,
            director: director.value,
            duration: duration.value,
            genre: genre.value,
            rate: rate.value,
            poster: poster.value

        })
        alert("La pelicula fue creada con éxito");
    }
    catch (error) {
        alert("Error al crear la película")
        console.log(error);
    }
}

module.exports = submitForm;
