// for (let i= 0; i < 6; i++) {
//     fetch("https://api.pikaserve.xyz/pokemon/random")
//     .then(data => data.json())
//     .then(item => {
//         for (let obj of item) {
//             const mother = document.getElementById("mother");
//             //mother div having a baby
//             const baby = document.createElement("div");
//             baby.classList.add("image", "bg-gray-900", "rounded-lg", "flex", "items-center", "justify-center", "relative", "px-2", "flex-col");
//             mother.appendChild(baby)
//             baby.innerHTML = `
//             <div class="absolute top-0 left-0 bg-slate-500 pl-3 pr-7 pb-1 rounded-br-[20px]"><h2 class="text-white text-lg font-extrabold">${item.name.english}</h2></div>
//             <!--Hp-->
//             <div class="absolute top-0 right-0 bg-violet-700 pl-3 pr-7 pb-1 rounded-tr-lg"><h2 class="text-white text-lg font-extrabold"><sub>hp</sub> ${item.base == undefined || false ? "N/A" : item.base.HP}</h2></div> 
//             <div class="absolute opacity-60 top-60 left-3 bg-red-700 pl-3 pr-7 rounded-tr-lg rounded-br-[50px]"><h2 class="text-white text-lg font-extrabold text-center opacity-100"><h2>Ability</h2></div> 
//             <div class="absolute top-56 left-20 pl-3 pr-7 rounded-tr-lg rounded-br-[50px]"><h2 class="text-red-200 italic text-lg font-extrabold text-stroke">${item.profile.ability[0][0]}</h2></div> 
//             <div class="absolute top-64 text-ellipsis w-[300px] overflow-auto left-3"><h2 class="text-white text-sm font-extrabold text-stroke">${item.description}</h2></div> 
//             <img class="mt-10 bg-gradient-to-r from-cyan-900 to-red-900 rounded-lg" src="${item.image.hires}" alt="Cute Pokemon">
//             <div class="rounded-tr-lg rounded-br-[50px]"><h2 class="text-red-200 italic text-lg font-extrabold text-center">${item.type}</h2></div>
//             `
//         }
//         //mother div
       
//         console.log(item.base)
//         console.log(item.profile.ability)
//     });
// }

for (let i=0; i <4; i++) {
    fetch("https://api.pikaserve.xyz/pokemon/random")
    .then(data => data.json())
    .then(item => {
        for (let i=0; i<1; i++) {
            let obj = []
            obj.push(item)
            for (let objs of obj) {
                if (!obj.includes(objs.id)) {
                    const mother = document.getElementById("mother");
                    //mother div having a baby
                    const baby = document.createElement("div");
                    baby.classList.add("image", "bg-gray-900", "rounded-lg", "flex", "items-center", "justify-center", "relative", "px-2", "flex-col");
                    mother.appendChild(baby)
                    baby.innerHTML = `
                    <div class="absolute top-0 left-0 bg-slate-500 pl-3 pr-7 pb-1 rounded-br-[20px]"><h2 class="text-white text-lg font-extrabold">${objs.name.english}</h2></div>
                    <!--Hp-->
                    <div class="absolute top-0 right-0 bg-violet-700 pl-3 pr-7 pb-1 rounded-tr-lg"><h2 class="text-white text-lg font-extrabold"><sub>hp</sub> ${objs.base == undefined || false ? "N/A" : objs.base.HP}</h2></div> 
                    <div class="absolute opacity-70 top-56 left-3 bg-red-700 pl-3 pr-7 rounded-tr-lg rounded-br-[50px]"><h2 class="text-black text-xs font-extrabold text-center opacity-100">Ability</h2></div> 
                    
                    <!--Ability-->
                    <div class="absolute top-56 left-16">
                    <div class="flex justify-center w-60 h-12">
                        <h2 class="text-red-200 italic text-lg font-extrabold text-center text-stroke">${objs.profile.ability[0][0]}</h2>
                    </div>
                    </div> 

                    <!--Species-->
                    <div class="absolute top-80 opacity-70 left-3 bg-red-700 pl-1 pr-2 rounded-tr-2xl rounded-br-[50px]"><h2 class="text-black text-xs font-extrabold text-center opacity-100">Species</h2></div> 
                    <div class="absolute top-80 left-16">
                    <div class="flex justify-center w-60 h-12">
                        <h2 class="text-red-200 italic text-lg font-extrabold text-center text-stroke">${objs.species}</h2>
                    </div>
                    </div> 
                    
                    <div class="absolute top-64 w-[300px] overflow-auto left-3"><h2 class="text-white text-xs modernWay font-extrabold text-stroke-des">${objs.description}</h2></div> 
                    <img class="mt-10 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg" src="${objs.image.hires}" alt="Cute Pokemon">
                    <div class="rounded-tr-lg rounded-br-[50px]"><h2 class="text-red-200 italic text-lg font-extrabold text-center">${objs.type}</h2></div>
                    `
                }
                console.log(obj)
            }
        }
})
}
