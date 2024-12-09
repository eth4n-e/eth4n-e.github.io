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
    const title = document.getElementById("title");

    const titleHeader = document.createElement("h1");
    titleHeader.innerHTML += project.name;

    title.appendChild(titleHeader);
    
    if (project.collaborators.length > 0) {
        const collabContainer = document.createElement("div");
        collabContainer.id = "collabs";

        const collabs = document.createElement("h3");
        collabs.className = "collabs";
        collabs.innerHTML += "Collaborators:".padEnd();

        collabContainer.appendChild(collabs);

        for(i = 0; i < project.collaborators.length; i++) {
            const collaborator = project.collaborators[i];

            const collab = document.createElement("h3");
            collab.className = "collabs";
            i == project.collaborators.length - 1 ? collab.innerHTML += `&nbsp${collaborator}` : collab.innerHTML += `&nbsp${collaborator},`;

            collabContainer.appendChild(collab);
        };
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