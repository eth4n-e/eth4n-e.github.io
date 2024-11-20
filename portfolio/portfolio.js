fetch('./projects.json')
    .then( response => {
        return response.json();
    }).then(projects => {
        console.log(projects);
        parseData(data);
    }).catch(err => {
        console.log(err);
    });

function parseData(data) {
    const projects = data.projects;

    projects.forEach( project => {
        const aProject = document.createElement("div");
        aProject.className = "row-project";
        aProject.id = project.subdomain;
        document.getElementById("projects").appendChild(aProject);
        
        const rowImage = document.createElement("div");
        rowImage.className = "proj-img";

        const image = document.createElement("img");
        image.src = project.img;

        rowImage.appendChild(image);
        document.getElementById("projects").appendChild(projectImage);

        const projectDescription = document.createElement("div");

        const title = document.createElement("h2");
        title.innerHTML = project.name;

        const subtitle = document.createElement("p");
        subtitle.className = "subtitle";
        subtitle.innerHTML = project.subtitle;

        const abstract = document.createElement("p");
        abstract.innerHTML = project.abstract;

        projectDescription.appendChild(title);
        projectDescription.appendChild(subtitle);
        projectDescription.appendChild(abstract);

        document.getElementById("projects").appendChild(projectDescription);

        /*
        document.getElementById("projects").innerHTML += 
            `<a href=${project.subdomain}.html>
                <div class="row-project" id=${project.subdomain}>
                    <div class="proj-img"><img src=${project.image}></div>
                    <div class="description">
                        <h2>${project.name}</h2>
                        <p class="subtitle">${project.subtitle}</p>
                        <p>${project.abstract}</p>
                    </div>
                </div>
            </a>
        */
    })
    // add name of first project to projects section
    document.getElementById("projects").innerHTML = data.projects[0].name;
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
    if(buttonValue == 'clear') {
        // revert back to original stylin
        for(i=0; i < proj.projects.length; i++) {
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    } else if (buttonValue != undefined) {
        for(i=0; i < proj.projects.length; i++) {
            if(proj.projects[i].category.includes(buttonValue)) {
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