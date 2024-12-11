const subStart = window.location.href.lastIndexOf("/") + 1;
const subEnd = window.location.href.lastIndexOf(".");

let subdomain = window.location.href.slice(subStart, subEnd);

fetch('../js/projects.json')
    .then(response => {
        return response.json();
    }).then(projects => {
        // filter returns a list
        // filter project for the one with matching subdomain
        const project = projects.projects.filter(project => project.subdomain == subdomain);
        buildPage(project[0]);
    }).catch(err => {
        console.log(err);
    })

/**
 * 
 * @param {Object} project - JSON object representing a singular project
 * @yields {HTML}
 * 
 */
function buildPage(project) {
    console.log(project);
    // get container for project name and collaborators
    const title = document.getElementById("header");
    const titleHeader = document.createElement("h1");
    titleHeader.id = "proj-title";
    titleHeader.innerHTML += project.name;
    // add h1 element to header container
    title.appendChild(titleHeader);
    
    // add collaborators to in header container if present
    if (project.collaborators.length > 0) {
        const collabContainer = document.createElement("div");
        collabContainer.id = "collab-container";

        const collabs = document.createElement("p");
        collabs.id = "collab";
        collabs.innerHTML += "Collaborators: " + project.collaborators.join(", ");

        collabContainer.appendChild(collabs);

        title.appendChild(collabContainer);
    }


    createProjectDescriptions(project);
    populateSlideShow(project);
    populateIcons(project);
    updateHeadTag();
}


/**
 * 
 * @param {JSON Object} project - JSON object representing individual project
 * Creates an HTML element to hold description and adds this to a description container
 */
const createProjectDescriptions = (project) => {
    project.description.forEach(description => {
        const paragraph = document.createElement("p");
        paragraph.className = "description";
        paragraph.innerHTML = description;

        const descriptionSection = document.getElementById("description");
        descriptionSection.appendChild(paragraph);
    });
}

/**
 * 
 * @param {JSON Object} project - takes in a JSON object representing an individual project
 * @yields {HTML} 
 * displays the first image in the project's list of images and appends remaining images to thumb bar. 
 * Creates event listeners which allow images in the thumb bar to become the main displayed image when clicked
 */
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
        newImage.style.width = "7.5vw";
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

/**
 * 
 * @param {JSON Object} project - takes in a JSON object representing a singular project
 * @yields {HTML} - creates an image element for each icon associated with the project and adds to an icon container icons 
 */
const populateIcons = function(project) {
    console.log(project);

    const icons = document.getElementById("icons");
    project.icons.forEach(icon => {
        const iconElem = document.createElement("img");
        iconElem.src = icon;
        iconElem.alt = icon.slice(icon.lastIndexOf("/") + 1, icon.lastIndexOf("."));
        // iconElem.style.width = 'calc(100% / ' + project.icons.length + ")";

        icons.appendChild(iconElem);
    })
}

/**
 * Adds google fonts to the head of each individual project's html page
 */
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