const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['../img/wa11img/oneTrillion.jpg', '../img/wa11img/sunrise.jpeg', '../img/wa11img/theo.jpeg', '../img/wa11img/trailerPark.jpeg', '../img/wa11img/tree.jpeg']
/* Declaring the alternative text for each image file */
const altText = ['One Trillion Racks', 'Sunrise over Flatirons', 'Cat Named Theo', 'Trailer Park Boys', 'Tree in Fall'];
/* Looping through images */
for(let i = 0; i < images.length; i++) {
    let image = images[i];
    let alt = altText[i];
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', alt);
    newImage.style.width = "128px";
    newImage.style.height = "128px";
    newImage.style.border = ""
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', newImage.getAttribute('src'));
        displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
    })
    thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const className = btn.getAttribute('class');

    console.log(className);

    if(className == 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = "Lighten";
        
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)"
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
        
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)"
    }
})