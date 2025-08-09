const container = document.getElementById("cards-container");

fetch("https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc", {
    method: "GET",
    headers: {
        "x-rapidapi-host": "anime-db.p.rapidapi.com",
        "x-rapidapi-key": "a393644aefmsha7998b059dd7c54p1d5644jsnf26ce041cccb"
    }
})
.then(response => response.json())
.then(data => {
    console.log(data); 

    data.data.forEach(anime => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

        col.innerHTML = `
            <div class="card card-custom h-100">
                <img src="${anime.image}" class="card-img-top" alt="${anime.title}">
                <div class="card-body">
                    <h5 class="card-title">${anime.title}</h5>
                    <p class="card-text">${anime.synopsis ? anime.synopsis.substring(0, 100) + "..." : "Sin descripción"}</p>
                    <span class="badge bg-primary">Ranking: ${anime.ranking}</span>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
})
.catch(err => console.error("Error al consumir la API:", err));
