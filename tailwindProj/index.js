
//navigation bar
const toggle = document.getElementById("toggle");
const navigation = document.getElementById("navigation");
window.addEventListener("resize", function() {
    if (screen.width > 768) {
        navigation.classList.remove("hide")
    }
})

toggle.addEventListener("click", function() {
    // var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (screen.width <= 425) {
        navigation.classList.toggle("hide")
    } else {
        navigation.classList.remove("hide")
    }
}) 
