const logo = {"Logo One": "images/logo1.png",
"Logo Two": "images/logo2.png",
"Logo Three": "images/logo3.png"},
font = {
    "RomanceFatalPrima": "RomanceFatalPrima-RAZV",
    "WizardWorld" : "WizardWorldSimplified-Kxr7",
    "Parsel Tongue" : "Parseltongue-GOnG",
    "Xefora":"Xefora-vp34",
    "Harry Potter": "ParryHotter",
    "'Legendary Runes" : "'Legendary Runes Free Trial"
},
selectLogo = document.querySelector(".selectLogo"),
selectFont = document.querySelector(".selectFont"),
img = document.querySelector("img"),
output = document.querySelector(".output"),
input = document.querySelector(".input")

for (const logos in logo) {
    let option = `<option value="${logo[logos]}">${logos}</option>`
    selectLogo.insertAdjacentHTML("beforeend", option)
};
for (const fonts in font) {
    let options = `<option value="${font[fonts]}">${fonts}</option>`
    selectFont.insertAdjacentHTML("beforeend", options)
};
selectLogo.addEventListener("click", () => {
    img.src = selectLogo.value
});
selectFont.addEventListener("click", () => {
    output.style.fontFamily = selectFont.value
});

input.addEventListener("input", (e)=> {
    // e.target.value = output.value;
    output.value = e.target.value
});
output.setAttribute("readonly", "readonly")

