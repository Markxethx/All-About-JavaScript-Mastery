let weather = {
    apiKey: "801c6a2d325c35c7fbcf8244bc0bff9b",
    fetchWeather(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric&appid="
        + this.apiKey
        )
        .then(res => res.json())
        .then(data => this.displayWeather(data))
    },
    displayWeather(data) {
    console.log(data)

    const {name} = data;
    const {country} = data.sys;
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    const {icon, description} = data.weather[0];

    document.getElementById("name").innerHTML = `<h1 class="text-stroke-description">${name}</h1>`;
    document.getElementById("icon").innerHTML = ``;
    document.getElementById("icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.getElementById("country").innerHTML = country;
    document.getElementById("description").innerHTML = description.toUpperCase();
    document.getElementById("temp").innerHTML = temp + "&#8451";
    document.getElementById("humidity").innerHTML = `<h2>Humidity: ${humidity} %</h2>`;
    document.getElementById("speed").innerHTML = `<h2>Wind Speed: ${speed} km/hr</h2>`;
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search() {
        this.fetchWeather(input.value);
        console.log(input.value)
    },
}
const input = document.getElementById("input");
const search = document.getElementById("search");
search.addEventListener("click", function() {
    weather.search();
    input.value = ""
})

// document.querySelector("#input")
//   .addEventListener('change', (e) => {
//     weather.fetchWeather(e.currentTarget.value);
// });


input.addEventListener("keyup", function (event) {
    console.log(event)
    if (event.key == "Enter") {
      weather.search();
    }
});
weather.fetchWeather("manila");

