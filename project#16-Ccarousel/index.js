let images = [
    {
        img : 'images/image1.jpg',
        text : 'Paris is where i go',
        arrow : 'one',
    },
    {
        img : 'images/image2.jpg',
        text : 'Paris is where i live the rest of my life',
        arrow : 'two',
    },
    {
        img : 'images/image3.jpg',
        text : 'gadsgasg 4e gasdgew' ,
        arrow : 'three',
    }
];
let currentImage = 0;
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const text = document.querySelector('.text');

loadImage();

function loadImage() {
    const current = images[currentImage].img;
    const img = document.querySelector('img');
    text.innerHTML = images[currentImage].text;
    img.src = current;
    console.log(current);
    blink(currentImage);
}
right.addEventListener('click', () => {
    currentImage++;
    if (currentImage < images.length) {
        loadImage();
    } else {
        currentImage = 0;
        loadImage();
    }
});

left.addEventListener('click', () => {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
        loadImage();
    } else {
        loadImage();
    }
});

const arrowDirection = document.querySelector(".arrow");


function blink(currentImage) {
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    if (currentImage === 0) {
        one.style.color = 'blue';
    } else if (currentImage === 1) {
        two.style.color = 'red';
    } else {
        three.style.color = 'violet'
    }

};