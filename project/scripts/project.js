const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.querySelector("#lastModified").innerHTML = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;

const newsButton = document.getElementById('#subscribe');
if (newsButton) {
    newsButton.addEventListener("click", function() {
        window.open("newsletter.html", "_blank");
    });
}


// ---------- Weather Feature ------------ //

let weatherIcon = document.getElementById("weatherIcon")
let apiKey = "2026cc9883490e04a8412142d4da0c5d";
let apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&lang=en";
let cel;

async function getWeather(city) {
    try {
        const response = await fetch(`${apiURL}&q=${city}&appid=${apiKey}`);

        if (!response.ok) {
        throw new Error("Unable to get weather data.");
        }

    const data = await response.json();
    const tempCelsius = Math.round(data.main.temp);
    document.querySelector(".temp").innerHTML = `${tempCelsius}°C`;

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain/png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weatherIcon[0].main === "Mist") {
        weatherIcon.src = "images/mist.png";
    }
    console.log(data.weather[0].main);  //delete later//
    document.querySelector("#weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    cel = tempCelsius;
    } catch (error) {
        document.querySelector(".error").style.display = "block";
        document.querySelector("#weather").style.display = "none";
        console.error(error);
    }
}
getWeather("Skelleftea, Sweden");

document.getElementById("fahrenheit").addEventListener("click", () => {
    if (cel !== undefined) {
        let fahrenheit = Math.round(cel * 1.8 + 32);
        document.querySelector(".temp").innerHTML = `${fahrenheit}°F`;
    }
});

document.getElementById("celsius").addEventListener("click", () => {
    if (cel !== undefined) {
        document.querySelector(".temp").innerHTML = `${cel}°C`;
    }
});