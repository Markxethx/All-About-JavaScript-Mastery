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


// fetch("https://api.pikaserve.xyz/pokemon/random")
//     .then(data => data.json())
//     .then(item => console.log(item))



// const url = "https://api.pikaserve.xyz/pokemon/random";
// JSON.parse(url)
for (let i= 0; i < 11; i++) {
    fetch("https://api.pikaserve.xyz/pokemon/random")
    .then(data => data.json())
    .then(item => {
        //mother div
        const mother = document.getElementById("mother");
        //mother div having a baby
        const baby = document.createElement("div");
        baby.classList.add("image", "bg-gray-900", "rounded-lg", "flex", "items-center", "justify-center", "relative");
        mother.appendChild(baby)
        //name of the pokemon
        // const nameMother = document.createElement("div")
        // nameMother.classList.add("absolute", "top-0", "left-0", "bg-slate-500", "pl-3", "pr-7", "pb-1", "rounded-br-[20px]")
        // baby.appendChild(nameMother)
        // const nameBaby = document.createElement("h2")
        // nameBaby.classList.add("text-white", "text-lg", "font-extrabold")
        // nameMother.appendChild(nameBaby)
        // baby.appendChild(nameMother)
        // console.log(item.name.english)
        // nameMother.innerHTML = `<h2 class="text-white text-lg font-extrabold">${item.name.english}h</h2>`
        baby.innerHTML = `
        <div class="absolute top-0 left-0 bg-slate-500 pl-3 pr-7 pb-1 rounded-br-[20px]"><h2 class="text-white text-lg font-extrabold">${item.name.english}</h2></div>
        <!--Hp-->
        <div class="absolute top-0 right-0 bg-violet-700 pl-3 pr-7 pb-1 rounded-tr-lg"><h2 class="text-white text-lg font-extrabold"><sub>hp</sub> ${item.base.HP}</h2></div> 
        <div class="absolute opacity-60 top-60 left-0 bg-red-700 pl-3 pr-7 rounded-tr-lg rounded-br-[50px]"><h2 class="text-white text-lg font-extrabold text-center opacity-100"><h2>Ability</h2></div> 
        <div class="absolute top-56 left-20 pl-3 pr-7 rounded-tr-lg rounded-br-[50px]"><h2 class="text-red-200 italic text-lg font-extrabold text-center opacity-100">${item.profile.ability[0]}</h2></div> 
        <div class="absolute top-64 text-ellipsis w-[300px] overflow-auto left-0"><h2 class="text-white text-base font-bold">${item.description}</h2></div> 
        <div class="absolute top-96 left-20 pl-3 pr-7 rounded-tr-lg rounded-br-[50px]"><h2 class="text-red-200 italic text-lg font-extrabold text-center opacity-100">${item.type}</h2></div>
        <img class="mt-16" src="${item.image.hires}" alt="Cute Pokemon">
        `
        console.log(item)
        console.log(item.description)
    });
}

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
