const container = document.getElementById("container")

const renderCards = (data) => {

    const cards = data.map((movie) => {
        const card = document.createElement("article")
        card.classList.add("card")

        const title = document.createElement("h3")
        title.classList.add("card-title")

        const link = document.createElement("a")

        const img = document.createElement("img")
        img.classList.add("card-img")

        const genre = document.createElement("p")

        const director = document.createElement("p")

        const duration = document.createElement("p")

        const year = document.createElement("p")

        const rate = document.createElement("p")

        link.textContent = movie.title;
        link.href = "#"
        img.src = movie.poster;
        genre.textContent = `Género: ${movie.genre}`
        director.textContent = `Director: ${movie.director}`;
        duration.textContent = `Duración: ${movie.duration}`;
        year.textContent = `Año: ${movie.year}`;
        rate.textContent = `Calificación: ${movie.rate}`;

        card.appendChild(title);
        title.appendChild(link);
        card.appendChild(img);
        card.appendChild(genre);
        card.appendChild(director);
        card.appendChild(duration);
        card.appendChild(year);
        card.appendChild(rate);

        return card;
    })
    cards.forEach(card => {
        container.appendChild(card);
    });
}
module.exports = renderCards;

