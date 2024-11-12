const button = document.getElementById("generate");
const paragraph = document.getElementById("data");
const ENDPOINT = 'https://api.chucknorris.io/jokes/random';

// make request to api to get joke
const getJoke = async () => {
    try {
        const response = await fetch(ENDPOINT);

        if(response.ok) {
            const bodyData = await response.json();
            // display joke
            displayRes(bodyData.value);
        } else {
            console.log(response);
        }
    } catch(err) {
        console.log(err);
    }
}

const displayRes = (quote) => {
    paragraph.innerHTML = quote;
}

button.addEventListener('click', () => getJoke());

// populate page with quote to begin
getJoke();