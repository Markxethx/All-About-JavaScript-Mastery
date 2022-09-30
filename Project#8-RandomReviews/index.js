let reviews = [
    {img : "https://randomuser.me/api/portraits/men/19.jpg",
    author : "Arjay",
    position: "Head Engineer",
    comment: "HAHAHA solid ka, you can do whatever the hell you want!"
    }, {img : "https://randomuser.me/api/portraits/men/17.jpg",
    author : "Leo",
    position: "CEO",
    comment: "You help me where i am now, and i am very thankful to you! Go on and build what you can build"
    }, {img : "https://randomuser.me/api/portraits/men/10.jpg",
    author : "Ramel",
    position: "Web Designer",
    comment: "We built this future, look what you built so far! It's showing what a man can build!"
    }, {img : "https://randomuser.me/api/portraits/men/10.jpg",
    author : "Gerald",
    position: "Chief Officer",
    comment: "This is the future we once dream"
    }
];

let currentItem = 0;
const imagee = document.getElementById('person-image');
const author = document.getElementById('author');
const position = document.getElementById('position');
const comment = document.getElementById('comment');

let left = document.querySelector('.left');
let right = document.querySelector('.right');

window.addEventListener('DOMContentLoaded', function(){
    revealReview()
});

function revealReview() {
    const present = reviews[currentItem];
    imagee.src = present.img;
    author.textContent = present.author;
    position.textContent = present.position;
    comment.textContent = present.comment;
};

left.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    revealReview(currentItem)
});


right.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    revealReview(currentItem)
});