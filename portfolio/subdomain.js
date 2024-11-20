const subStart = window.location.href.lastIndexOf("/") + 1;
const subEnd = window.location.href.lastIndexOf(".");

let subdomain = window.location.href.slice(start, end);

fetch('./projects.json')
    .then(response => {
        return response.json();
    }).then(projects => {
        proj = projects;
        buildPage(project);
    }).catch(err => {
        console.log(err);
    })

function buildPage(project) {
    document.getElementById()
}