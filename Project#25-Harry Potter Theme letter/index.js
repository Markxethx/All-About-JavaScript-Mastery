//here we create a name for our fonts, files are available at https://drive.google.com/drive/folders/1TcX55loYVIVAkr92H-ZfG3_cKLMbYapR?usp=sharing

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
input = document.querySelector(".input"),
saveBtn = document.getElementById("save")


//options for select
for (const logos in logo) {
    let selected;
    if (img.src == "") {
        selected = "images/logo1.png"
    }
    let option = `<option value="${logo[logos]}" ${selected}>${logos}</option>`
    selectLogo.insertAdjacentHTML("beforeend", option)
};
for (const fonts in font) {
    let selected;
    if (output.style.fontFamily == "") {
        selected = "RomanceFatalPrima"
    }
    let options = `<option value="${font[fonts]}" ${selected}>${fonts}</option>`
    selectFont.insertAdjacentHTML("beforeend", options)
};

//event listener for selecting logo
selectLogo.addEventListener("click", () => {
    img.src = selectLogo.value
});

//event listener for selecting fonts
selectFont.addEventListener("click", () => {
    output.style.fontFamily = selectFont.value
});

//to get the "type" text to other text area, select it's value equal input value
input.addEventListener("input", (e)=> {
    // e.target.value = output.value;
    output.value = e.target.value
});

//textarea (output) should be readonly
output.setAttribute("readonly", "readonly")

//save to local storage
saveBtn.addEventListener("click", ()=> {
    localStorage.setItem("myLetter", JSON.stringify(input.value))
    localStorage.setItem("myFont", JSON.stringify(selectFont.value))
    localStorage.setItem("myLogo", JSON.stringify(selectLogo.value))
    alert("Save in the Browser")
})

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLetter"))
const leadsFromLocalStorageLogo = JSON.parse( localStorage.getItem("myLogo"))
const leadsFromLocalStorageFont = JSON.parse( localStorage.getItem("myFont"))

// items in the local storage
//to know wether the user save the letter or not
if (leadsFromLocalStorage || leadsFromLocalStorageFont || leadsFromLocalStorageLogo) {
    if (leadsFromLocalStorage == "" || leadsFromLocalStorageFont == "" || leadsFromLocalStorageLogo == "") {
        input.setAttribute("placeholder", "Enter Your Letter here")
        img.src = leadsFromLocalStorageLogo
        output.style.fontFamily = leadsFromLocalStorageFont
        selectLogo.value = leadsFromLocalStorageLogo
        selectFont.value = leadsFromLocalStorageFont
    } else {
        input.value = leadsFromLocalStorage
        output.value = leadsFromLocalStorage
        output.style.fontFamily = leadsFromLocalStorageFont
        selectLogo.value = leadsFromLocalStorageLogo
        selectFont.value = leadsFromLocalStorageFont
        img.src = leadsFromLocalStorageLogo
    }

}
