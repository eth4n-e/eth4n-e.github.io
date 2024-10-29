document.getElementById("header").addEventListener("mouseover", function(e) {
    // add a rounded border when the header element is hovered over
    this.style.backgroundColor = "blue";
    this.style.borderRadius = "5%";
    this.style.padding = "2rem";
    this.style.color = "white";
});

document.getElementById("animated-button").addEventListener("click", function(e) {
    // toggle animation
    if(this.style.animationName) {
        this.style.removeProperty('animation-name');
        this.style.removeProperty('animation-duration');
        this.style.removeProperty("animation-timing-function");
    } else {
        this.style.animationName = "enlarge";
        this.style.animationDuration = "2s";
        this.style.animationTimingFunction = "ease-in";
    }
})

document.getElementById("filler-text").addEventListener("click", function(e) {
    this.style.backgroundColor = "blue";
    this.style.color = "white";
})