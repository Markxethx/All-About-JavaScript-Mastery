const selectTag = document.querySelectorAll("select"),
translateBtn = document.querySelector("button"),
textFrom = document.getElementById("textFrom"),
textTo = document.getElementById("toText"),
exchange = document.querySelector(".exchange"),
icon = document.querySelectorAll(".icon")
// import countries from "./js/countries"
selectTag.forEach((tag, id) => {
    for(const country in countries) {
        let selected;
        if ( id == 0 && country == "en-GB") {
            selected = "selected"
        } else if (id == 1 && country == "ja-JP") {
            selected = "selected"
        }
        let option = `<option value="${countries[country]}" ${selected}>${countries[country]}</option>`
        tag.insertAdjacentHTML("beforeend", option)
        console.log(country, countries[country])
    }
});

translateBtn.addEventListener("click", () => {
    let text = textFrom.value,
    translateFrom = selectTag[0].value,
    translateTo = selectTag[1].value
    if (!text) return;
    textTo.setAttribute("placeholder", "tranlating...")
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        textTo.value = data.responseData.translatedText;
        textTo.setAttribute("placeholder", "tranlation")
        // textTo.innerHTML = textTo.value;
    })
})

exchange.addEventListener("click", () => {
    let tempText = textFrom.value;
    textFrom.value = textTo.value;
    textTo.value = tempText;
    currentLang = selectTag[0].value;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = currentLang;

})

icon.forEach(icons => {
    icons.addEventListener("click", ({target})=>{
        if (target.classList.contains("fa-copy")) {
            if (target.id == "from") {
                // textFrom.select()
                var textFrom = document.getElementById("textFrom")
                navigator.clipboard.writeText(textFrom.value)
                console.log(textFrom.value)
            } else {
                textTo.select()
                var textTo =textTo = document.getElementById("toText")
                navigator.clipboard.writeText(textTo.value)
                console.log(textTo.value)
            }
        } else {
            let utterance;
            if (target.id == "sound") {
                utterance = new SpeechSynthesisUtterance(textFrom)
                utterance.lang = selectTag[0].value
            } else if (target.id == "sound2") {
                utterance = new SpeechSynthesisUtterance(textTo)
                utterance.lang = selectTag[1].value
            }
            speechSynthesis.speak(utterance)
        }
    })
})