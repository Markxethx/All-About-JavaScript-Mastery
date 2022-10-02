const backgroundColor = ["red", "blue", "violet", "rgb(102, 104, 56)", "#606c38", "#283618", "#dda15e"];
const colorValue = document.getElementById('btn');
const backGround = document.querySelector('.color');

colorValue.addEventListener('click', function(){
    var randomNumber = Math.floor(Math.random()* backgroundColor.length)
    document.body.style.backgroundColor = backgroundColor[randomNumber]
    backGround.textContent = backgroundColor[randomNumber]
});
