const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['../img/wa11img/pic1.jpg', '../img/wa11img/pic2.jpg', '../img/wa11img/pic3.jpg', '../img/wa11img/pic4.jpg', '../img/wa11img/pic5.jpg']
/* Declaring the alternative text for each image file */

/* Looping through images */
for (filename in images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filename);
    newImage.setAttribute('alt', filename);
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', newImage.getAttribute('src'));
        displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
    })
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const className = btn.getAttribute('class');

    if(className == 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent("Lighten");
        
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)"
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent("Darken");
        
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)"
    }
})