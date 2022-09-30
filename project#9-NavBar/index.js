let navToggle = document.querySelector('.nav-toggle');
let links = document.querySelector('.links');
let socialLinks = document.querySelector('.social-icons');

navToggle.addEventListener('click', function(){
    links.classList.toggle('show-links')
});