randomHex = [0, 1 , 2 , 3, 4, 5, 6, 7, 8, 9, "A", "B", "C" ,"D", "E","F" ];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

/* btn.addEventListener('click', function(){
    const randomNumber1= Math.floor(Math.random()* randomHex.length);
    const randomNumber2= Math.floor(Math.random()* randomHex.length);
    const randomNumber3= Math.floor(Math.random()* randomHex.length);
    const randomNumber4= Math.floor(Math.random()* randomHex.length);
    const randomNumber5= Math.floor(Math.random()* randomHex.length);
    const randomNumber6= Math.floor(Math.random()* randomHex.length);
    const value = "#" + randomHex[randomNumber1] + randomHex[randomNumber2] + randomHex[randomNumber3] + randomHex[randomNumber4] + randomHex[randomNumber5] + randomHex[randomNumber6]
    document.body.style.backgroundColor = value
    color.textContent = value
}); */

btn.addEventListener('click', function(){
    let hexColor = "#";
    for (B = 0; B < 6 ; B++){
        hexColor += randomHex[getRandomNumber()]
    }

    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
});

function getRandomNumber(){
    return Math.floor(Math.random() * randomHex.length)
}
