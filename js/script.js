const url = "https://rickandmortyapi.com/api/character/";
const charactersContainer = document.querySelector(".charactersContainer"); 

async function fetchCharaters() {

    try {
        const response = await fetch(url);

        const results = await response.json();

        createHtml(results.results);

    } catch (error) {
        console.log(error);
        charactersContainer.innerHTML = errorMessage();
    }

}
fetchCharaters();

function createHtml(character) {

    console.log(character);

    charactersContainer.innerHTML = "";

    for(let i = 0; i < character.length; i++) {
   
        let location = character[i].location.name;
            if(location === "Earth (Replacement Dimension)") {
                location = "Earth";
            }
        let nrOfepisodes = "episodes"; 
            if(character[i].episode.length === 1) {
                nrOfepisodes = "episode";
            } 

        charactersContainer.innerHTML += `<a href="details.html?id=${character[i].id}" class="cards">
                                                <div class="img" style="background-image: url(${character[i].image});"></div>
                                                <div class="characterDetails">
                                                    <h2>${character[i].name}</h2>
                                                    <ul>
                                                        <li><b>Appears in:</b> ${character[i].episode.length} ${nrOfepisodes}</li>
                                                        <li><b>Status:</b> ${character[i].status}</li>
                                                        <li><b>Location:</b> ${location}</li>
                                                    </ul>
                                                </div>
                                            </a>
                                            `;

        if(i === 30) {
            break;
        }
    }
}