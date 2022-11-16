fetch("https://api.pikaserve.xyz/pokemon/random")
    .then(data => data.json())
    .then(item => console.log(item))



// const url = "https://api.pikaserve.xyz/pokemon/random";
// JSON.parse(url)
// for (let i= 0; i < 5; i++) {
//     fetch("https://api.pikaserve.xyz/pokemon/random")
//     .then(data => data.json())
//     .then(item => {
//         console.log(item.id)
//         //mother div
//         const mother = document.getElementById("mother");
//         //mother div having a baby
//         const baby = document.createElement("div");
//         baby.classList.add("image", "bg-gray-900", "rounded-lg", "flex", "items-center", "justify-center", "relative");
//         mother.appendChild(baby)
//         //name of the pokemon
//         const name = document.createElement("div")
//         name.classList.add()
//         baby.innerHTML = `<img src="${item.image.hires}" class="w-full h-full" alt="Cute Pokemon" />`
//     });
// }

// loadPokemon();

// fetch("https://pokeapi.co/api/v2/pokemon/")
//     .then(data => data.json())
//     .then(item => {console.log(item)
//     });

// console.log(randomToFinite.length)
// const image = document.querySelectorAll(".image")
// // const mother = document.getElementById("mother")
// image.forEach(e => {
//     fetch("https://api.pikaserve.xyz/pokemon/random")
//     .then(data => data.json())
//     .then(item => {
//         e.innerHTML = `<img src="${item.image.hires}" class="w-full h-full" alt="Cute Pokemon" />`
//     });
// })


// const image = document.querySelectorAll(".image")
// image.forEach(e => {
//     fetch("https://api.pikaserve.xyz/pokemon/random")
//     .then(data => data.json())
//     .then(item => {
//         for (let i =0; i < item.length; i++) {
//             randomToFinite.push()
//             e.innerHTML = `<img src="${item.image.hires}" class="w-full h-full" alt="Cute Pokemon" />`
//         }
//     });
// })


// fetch("https://api.pikaserve.xyz/pokemon")
//     .then(data => data.json())
//     .then(item => console.log(item));
