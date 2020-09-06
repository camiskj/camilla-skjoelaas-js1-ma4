const aboutGame = document.querySelector(".aboutGame");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.rawg.io/api/games/" + id;

async function fetchGame() {

    try {

    const response = await fetch(url);

    const gameDetails = await response.json();

    console.log(gameDetails);

    createHtml(gameDetails);
    }

    catch(error) {
        console.log("error");
        aboutGame.innerHTML = "Something went wrong";

    }
}

fetchGame();

function createHtml(gameDetails) {
    aboutGame.innerHTML = `
    <h1>${gameDetails.name}</h1>
    <div class="factsWrapper"><div class="shortFacts">Released: ${gameDetails.released}</div>
    <div class="shortFacts">Suggested by: <span class="count">${gameDetails.suggestions_count}</span> people</div></div>
    <img src="${gameDetails.background_image}">
    <div class="description"><h2>About</h2>${gameDetails.description}</div>
    `;
}