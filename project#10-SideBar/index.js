let sideBarToggle = document.querySelector('.sidebar-toggle');
let closeButton = document.querySelector('.close-btn');
let sidebar = document.querySelector('.sidebar');

sideBarToggle.addEventListener('click', function() {
    if (sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar')
    }   else {
        sidebar.classList.add('show-sidebar')
    }
});

closeButton.addEventListener('click', function() {
    if (sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar')
    }   else {
        sidebar.classList.add('show-sidebar')
    }
})