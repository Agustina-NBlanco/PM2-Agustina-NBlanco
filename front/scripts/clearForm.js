const submitForm = require("./submitForm");

const clearForm = (event) => {
    
    const title = document.getElementById("title");
    const year = document.getElementById("year");
    const director = document.getElementById("director");
    const duration = document.getElementById("duration");
    const gender = document.getElementById("gender");
    const rate = document.getElementById("rate");
    const poster = document.getElementById("poster");
    

    
    title.value = "";
    year.value = "";
    director.value = "";
    duration.value = "";
    gender.value = "";
    rate.value = "";
    poster.value = "";

    event.preventDefault();
}

module.exports = clearForm;