let proj;

fetch('../js/projects.json')
    .then( response => {
        return response.json();
    }).then(projects => {
        console.log(projects);
        proj = projects.projects;
        parseData(projects.projects);
    }).catch(err => {
        console.log(err);
    });


/**
 * 
 * @param {Array JSON Objects} projects - array of JSON objects representing projects
 * @yields {HTML} - returns dynamically rendered HTML using fields from each project
 */
function parseData(projects) {
    console.log(projects);
    
    projects.forEach( project => {
        document.getElementById("projects").innerHTML += 
            `<a id=${project.subdomain} href=${project.subdomain}.html>
                <div class="row-project">
                    <div class="proj-img"><img src=${project.images[0]} alt=${project.subtitle}></div>
                    <div class="description">
                        <h2 class="project-name">${project.name}</h2>
                        <p class="subtitle">${project.subtitle}</p>
                        <p>${project.abstract}</p>
                    </div>
                </div>
            </a>`
    });
}

// adding event listeners to each sorting button
document.querySelectorAll("#buttons").forEach( button => {
    button.addEventListener('click', e => {
        console.log(e.target.value);
        sortProjects(e.target.value);
    })
})

/**
 * 
 * @param {String} buttonValue - value denoting what to sort on
 * @yields {HTML} - updates the styling of html elements to hide or display depending on the buttonValue
 */
function sortProjects(buttonValue) {
    console.log(proj);
    console.log(buttonValue);
    
    visibleProjects = [];
    hiddenProjects = [];

    if(buttonValue == 'clear') {
        // revert back to original styling
        for(i=0; i < proj.length; i++) {
            document.getElementById(proj[i].subdomain).style.display = "flex";
        }
    } else if (buttonValue != undefined) {
        for(i=0; i < proj.length; i++) {
            console.log(proj[i]);
            if(proj[i].skills.includes(buttonValue)) {
                // show the project
                document.getElementById(proj[i].subdomain).style.display = "flex";
                visibleProjects.push(document.getElementById(proj[i].subdomain));
            } else {
                // hide the project
                document.getElementById(proj[i].subdomain).style.display = "none";
                hiddenProjects.push(document.getElementById(proj[i].subdomain));
            }
        }

        // added visible / hidden projects and re-added to the project container to avoid the awkware space occurring when design and team projects were sorted
        const container = document.getElementById("projects");
        container.innerHTML = "";
        visibleProjects.concat(hiddenProjects).forEach((project) => container.appendChild(project));


    } else {
        console.log("error, button value is undefined");
    }
}