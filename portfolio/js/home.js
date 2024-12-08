const aboutButton = document.getElementById("about-button");
const projectsButton = document.getElementById("projects-button");

aboutButton.addEventListener("click", () => {
    window.location.href = window.location.href.replace("home", "about");
});

projectsButton.addEventListener("click", () => {
    console.log("clicked projects button");
    window.location.href = window.location.href.replace("home", "portfolio");
});