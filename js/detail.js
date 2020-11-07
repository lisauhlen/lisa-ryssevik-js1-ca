const h1Container = document.querySelector(".detailsH1");
const detailsContainer = document.querySelector(".detailsContainer");
const breadcrumb = document.querySelector(".breadcrumb");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://rickandmortyapi.com/api/character/" + id;

async function fetchCharacterDetails() {

    try {
        const response = await fetch(url);

        const results = await response.json();

        createHtml(results);


    } catch (error) {
        console.log(error);
        detailsContainer.innerHTML = errorMessage();
    }

}
fetchCharacterDetails(); 

function createHtml(characterDetails) {

    console.log(characterDetails);

    detailsContainer.innerHTML = "";

    let origin = characterDetails.origin.name; 
        if(origin === "unknown") {
            origin = "an unknown place";
        } if(origin === "Earth (Replacement Dimension)") {
            origin = "Earth";
        } 
    let location = characterDetails.location.name;
        if(location === "Earth (Replacement Dimension)") {
            location = "Earth";
        } 
    let status = characterDetails.status; 
        if(status === "unknown") {
            status = "probably alive - if it's not dead... It could of course be on the run! No one really knows for sure";
        } 
    let nrOfepisodes = "episodes"; 
        if(characterDetails.episode.length === 1) {
            nrOfepisodes = "episode";
        } 
    let apostrophe = "'s";

    function checkApostrophe() {
        const name = characterDetails.name;
        const possessive = name.endsWith("s");

        if(possessive) {
            apostrophe = "'";
        }
    }
    checkApostrophe();

    document.title = characterDetails.name;

    h1Container.innerHTML = `<h1>${characterDetails.name}</h1>`;

    detailsContainer.innerHTML += `<div class="detailsImg">
                                        <img src="${characterDetails.image}">
                                    </div>
                                    <p>${characterDetails.name} is a ${characterDetails.species} originating from ${origin}.
                                    ${characterDetails.name}${apostrophe} current location is ${location}, and roumor has it this character is ${status}.
                                    </p>
                                    <p>${characterDetails.name} appears in ${characterDetails.episode.length} ${nrOfepisodes}.</p>
                                `;
        
    breadcrumb.innerHTML = `<a href="index.html">Rick and Morty Characters</a> / <p" class=currentPage>${characterDetails.name}</p>`;
}
