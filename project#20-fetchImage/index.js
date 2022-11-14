const cat_result = document.getElementById("cat_result")
const dog_result = document.getElementById("dog_result")
const catBtn = document.getElementById("cat_btn")
const dogBtn = document.getElementById("dog_btn")

catBtn.addEventListener("click", getCat)
dogBtn.addEventListener("click", getDog)

function getCat() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => { 
            cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
    })
}
// function getCat() {
// 	fetch('https://aws.random.cat/meow')
// 		.then(res => res.json())
// 		.then(data => {
// 			cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
// 		});
// }


function getDog() {
fetch("https://random.dog/woof.json")
.then(res => res.json())
.then(data => { dog_result.innerHTML = `<img src="${data.url}" />`})
}