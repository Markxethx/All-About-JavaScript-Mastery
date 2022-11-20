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
    const {name} = data;
    const {country, sunrise, sunset} = data.sys;
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    console.log(speed)
    console.log(data)
    console.log(temp, humidity)
    console.log(country,sunrise, sunset)
    document.getElementById("apple").innerHTML = name
    }
}
weather.fetchWeather("marikina")
weather.displayWeather()
