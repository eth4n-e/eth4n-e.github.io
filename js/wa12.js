const button = document.getElementById("comic-button");
const image = document.getElementById("comic-image");
const title = document.getElementById("comic-title");
const date = document.getElementById("date");

const randomValueGenerator = () => {
    return Math.floor(Math.random() * 3000) + 1
}

const comicGenerator = async () => {
    const comicNumber = randomValueGenerator();

    const ENDPOINT = `https://xkcd.com/${comicNumber}/info.0.json`;

    try {
        const response = await fetch(ENDPOINT, {
            method: "GET",
            headers: {
                "mode": "no-cors",
            }
        });

        if(response.ok) {
            return await response.json();
        } else {
            console.log(response);
        }
    } catch (error) {
        console.log(`Unable to fetch comic number: ${comicNumber}`);
    }
}


button.addEventListener('click', async () => {
    const comicData = await comicGenerator();

    console.log(comicData);

})