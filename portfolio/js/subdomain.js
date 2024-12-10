const subStart = window.location.href.lastIndexOf("/") + 1;
const subEnd = window.location.href.lastIndexOf(".");

let subdomain = window.location.href.slice(subStart, subEnd);

fetch('../js/projects.json')
    .then(response => {
        return response.json();
    }).then(projects => {
        // filter returns a list
        const project = projects.projects.filter(project => project.subdomain == subdomain);
        buildPage(project[0]);
    }).catch(err => {
        console.log(err);
    })

function buildPage(project) {
    console.log(project);
    const title = document.getElementById("header");

    const titleHeader = document.createElement("h1");
    titleHeader.id = "proj-title";
    titleHeader.innerHTML += project.name;

    title.appendChild(titleHeader);
    
    if (project.collaborators.length > 0) {
        const collabContainer = document.createElement("div");
        collabContainer.id = "collab-container";

        const collabs = document.createElement("p");
        collabs.id = "collab";
        collabs.innerHTML += "Collaborators: " + project.collaborators.join(", ");

        collabContainer.appendChild(collabs);

        title.appendChild(collabContainer);
    }

    // turn into method
    project.description.forEach(description => {
        const paragraph = document.createElement("p");
        paragraph.className = "description";
        paragraph.innerHTML = description;

        const descriptionSection = document.getElementById("description");
        descriptionSection.appendChild(paragraph);
    });

    populateSlideShow(project);
    updateHeadTag();
}

const populateSlideShow = function(project) {
    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector(".thumb-bar");
    const images = project.images;
    const altText = project.subdomain;

    displayedImage.setAttribute('src', images[0]);
    displayedImage.setAttribute('alt', altText);

    for(let i = 0; i < images.length; i++) {
        let image = images[i];
        const newImage = document.createElement('img');
        newImage.setAttribute('src', image);
        newImage.setAttribute('alt', altText);
        newImage.style.width = "10vw";
        newImage.style.height = "10vh";
        newImage.style.border = ""
        newImage.style.borderRadius = ".375rem";
        newImage.addEventListener('click', () => {
            displayedImage.setAttribute('src', newImage.getAttribute('src'));
            displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
        })
        thumbBar.appendChild(newImage);
    }
}

const updateHeadTag = () => {
    document.head.innerHTML += `    
    <!--Oswald Typeface-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet">
    <!--Quattrocento Typeface-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Quattrocento:wght@400;700&display=swap" rel="stylesheet">
    `
}