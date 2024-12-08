let proj;

fetch('../js/projects.json')
    .then( response => {
        return response.json();
    }).then(projects => {
        console.log(projects);
        proj = projects;
        parseData(projects);
    }).catch(err => {
        console.log(err);
    });

function parseData(data) {
    const projects = data.projects;

    console.log(projects);
    
    projects.forEach( project => {
        document.getElementById("projects").innerHTML += 
            `<a href=${project.subdomain}.html>
                <div class="row-project" id=${project.subdomain}>
                    <div class="proj-img"><img src=${project.images[0]} alt=${project.subtitle}></div>
                    <div class="description">
                        <h2>${project.name}</h2>
                        <p class="subtitle">${project.subtitle}</p>
                        <p>${project.abstract}</p>
                    </div>
                </div>
            </a>`
    });
}

document.querySelectorAll("#buttons").forEach( button => {
    button.addEventListener('click', e => {
        console.log(e.target.value);
        sortProjects(e.target.value);
    })
})

// rewrite this method
// used to filter projects based on category
function sortProjects(buttonValue) {
    console.log(buttonValue);
    if(buttonValue == 'clear') {
        // revert back to original styling
        for(i=0; i < proj.projects.length; i++) {
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    } else if (buttonValue != undefined) {
        for(i=0; i < proj.projects.length; i++) {
            console.log(proj.projects[i]);
            if(proj.projects[i].skills.includes(buttonValue)) {
                // show the project
                document.getElementById(proj.projects[i].subdomain).style.display = "flex";
            } else {
                // hide the project
                document.getElementById(proj.projects[i].subdomain).style.display = "none";
            }
        }
    } else {
        console.log("error, button value is undefined");
    }
}