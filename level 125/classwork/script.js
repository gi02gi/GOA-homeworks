const input = document.getElementById("search");
const btn = document.getElementById("btn");
const results = document.getElementById("results");

const API_KEY = "a8c3337f-308b-4831-8e7d-28843cba33fe";

btn.addEventListener("click", () => {
    const query = input.value;

    fetch(`https://api.musicapi.com/search?query=${query}&apikey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            results.innerHTML = "";

            data.results.slice(0, 3).forEach(song => {
                results.innerHTML += `
                    <div>
                        <h3>${song.title}</h3>
                        <p>${song.artist}</p>
                        <img src="${song.image}" width="100">
                    </div>
                `;
            });
        })
        .catch(err => {
            console.log(err);
            results.innerHTML = "<p>დაფიქსირდა შეცდომა</p>";
        });
});