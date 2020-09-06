const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".gameContainer");

async function getGameRating() {

    try {

    const response = await fetch(url);

    const gameResult = await response.json();

    const games = gameResult.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
        console.log(games[i].name);
        console.log(games[i].released);
        console.log(games[i].rating);
        console.log(games[i].background_image);

        resultsContainer.innerHTML += `
        <div class="gameFrame">
        <a href="question3.html?id=${games[i].id}"><h2>${games[i].name}</h2></a>
        <p>Released: ${games[i].released}</p>
        <p>Rating: ${games[i].rating}</p>
        <img src="${games[i].background_image}"></div>
        `;
    } 
    }

    catch(error) {
        console.log("error");
        resultsContainer.innerHTML = "Something went wrong";
    }
} 

getGameRating();