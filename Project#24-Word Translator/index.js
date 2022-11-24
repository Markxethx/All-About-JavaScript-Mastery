const selectTag = document.querySelectorAll("select"),
translateBtn = document.querySelector("button"),
textFrom = document.getElementById("textFrom"),
textTo = document.getElementById("toText")
// import countries from "./js/countries"
selectTag.forEach((tag, id) => {
    for(const country in countries) {
        let selected;
        if ( id == 0 && country == "en-GB") {
            selected = "selected"
        } else if (id == 1 && country == "hi-IN") {
            selected = "selected"
        }
        let option = `<option value="${countries[country]}">${countries[country]}</option>`
        tag.insertAdjacentHTML("beforeend", option)
    }
});

translateBtn.addEventListener("click", () => {
    let text = textFrom.value,
    translateFrom = selectTag[0].value,
    translateTo = selectTag[1].value
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`
    fetch(apiUrl).then(res => res.json())
    .then(data => {
        console.log(data)
        textTo.value = data.responseData.translatedText;
    })
})
