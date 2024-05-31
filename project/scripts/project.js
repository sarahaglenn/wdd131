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

if (window.location.pathname=="https://sarahaglenn.github.io/wdd131/project/outdoors.html") {
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

    const f = document.getElementById("fahrenheit");
    if (f) {
        f.addEventListener("click", () => {
        if (cel !== undefined) {
            let fahrenheit = Math.round(cel * 1.8 + 32);
            document.querySelector(".temp").innerHTML = `${fahrenheit}°F`;
        }
    });
    }
    const c = document.getElementById("celsius");
    if (c) {
        c.addEventListener("click", () => {
            if (cel !== undefined) {
                document.querySelector(".temp").innerHTML = `${cel}°C`;
            }
        });
    }
}
const restaurants = [
    {
        restaurantName: "Ainas Cafe",
        imageSrc: "images/ainas300x200.webp",
        description: "Ainas is a classic Swedish café with origins from the 50s. Enjoy daily fresh bread from the in-house bakery and light dishes.",
        webUrl: "https://ainascafe.se/"
    },
    {
        restaurantName: "Bryggargatan",
        imageSrc: "images/bryggargatan300x200.webp",
        description: "Bryggargatan is owned and operated by Jon Oskar and Sarah. A passionate chef with roots in Iceland and an artistic sommelier from Piteå. We love good food, good drinks and nice meals and together with our staff we work purposefully to be able to offer just that. A meeting place with quality and warmth, good taste experiences and a pleasant atmosphere.",
        webUrl: "https://www.bryggargatan.se/"
    },
    {
        restaurantName: "The Bishops Arms",
        imageSrc: "images/bishopsarms300x200.webp",
        description: "The Bishops Arms is a wonderful mix of restaurant, pub and bar where the focus is on artisanal and carefully selected food and drink for all tastes. Here you can enjoy good food and drink in a solid and relaxed British pub environment after work or why not have a drink, beer or snack after shopping or before the cinema. On the menu, you will find everything from classic pub dishes such as prime rib burgers and Fish n Chips to smaller dishes and tasty desserts, and of course you can always find vegetarian and vegan food and drink options. We are very proud of our local ingredients, which are carefully selected and accompany our natural flavors in the menu, which is changed four times a year.",
        webUrl: "https://www.bishopsarms.com/vara-pubar/skelleftea/"
    },
    {
        restaurantName: "Tatung",
        imageSrc: "images/tatung300x200.webp",
        description: "Tatung offers a variety of Chinese dishes, from dim sum to traditional stir-fries. It is loved for its flavorful dishes and generous portions.",
        webUrl: "https://www.facebook.com/p/Restaurang-Ny-Tatung-100063669936399/?locale=sv_SE"
    },
    {
        restaurantName: "Stadskällaren",
        imageSrc: "images/stadskallaren300x200.webp",
        description: "Skellefteå's first and only brew pub. Here you'll find a focus on craft beer from Stadskällaren's own brewery and elegant pub food with a unique twist.",
        webUrl: "https://www.stadskallaren.nu/"
    },
    {
        restaurantName: "Café Kanel",
        imageSrc: "images/cafekanel300x200.webp",
        description: "Come in for a good coffee, a fresh lunch, or run by and grab a take-away.",
        webUrl: "https://www.visitskelleftea.se/sv/298428/Caf-Kanel/"
    },
  ];

  function generateCards(things) {
    const restaurantHTML = things.map((r) =>
        `<section>
        <h3>${r.restaurantName}</h3>
        <p>${r.description}</p>
        <img src="${r.imageSrc}" alt="${r.restaurantName}" loading="lazy" width="300" height="200">
        <a href="${r.webUrl}" title="${r.restaurantName}'s website">See more here</a>
        </section>`    
    );
    const cards = document.getElementById("cards").innerHTML;
    if (cards) {
        cards.innerHTML = restaurantHTML.join("");
    } 
}
generateCards(restaurants);