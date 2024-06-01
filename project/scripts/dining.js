const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.querySelector("#lastModified").innerHTML = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;

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
        description: `"We love good food, good drinks, and nice meals. Together with our staff we work purposefully to be able to offer just that. A meeting place with quality and warmth, good taste experiences and a pleasant atmosphere."<br> --Owners Jon Oskar and Sarah`,
        webUrl: "https://www.bryggargatan.se/"
    },
    {
        restaurantName: "The Bishops Arms",
        imageSrc: "images/bishopsarms300x200.webp",
        description: "The Bishops Arms is a delightful mix of restaurant, pub, and bar with a focus on artisanal food and drink for all tastes. On the menu, you will find everything from classic pub dishes such as prime rib burgers and Fish n Chips to smaller dishes and tasty desserts.",
        webUrl: "https://www.bishopsarms.com/vara-pubar/skelleftea/"
    },
    {
        restaurantName: "Tatung",
        imageSrc: "images/tatung300:200.webp",
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
        <img class="dine" src="${r.imageSrc}" alt="${r.restaurantName}" loading="lazy" width="300" height="200">
        <a href="${r.webUrl}" title="${r.restaurantName}'s website">See more here</a>
        </section>`    
    );
    const cards = document.getElementById("cards").innerHTML = restaurantHTML.join("");
}
generateCards(restaurants);