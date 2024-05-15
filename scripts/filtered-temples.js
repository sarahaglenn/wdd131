const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.querySelector("#lastModified").innerHTML = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
      templeName: "Stockholm Sweden",
      location: "Västerhaninge, Sweden",
      dedicated: "1985, July, 2",
      area: 31000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/stockholm-sweden/400x250/stockholm-sweden-lds-temple-1029790-wallpaper.jpg"
    },
    {
      templeName: "Copenhagen Denmark",
      location: "Frederiksberg, Hovedstaden, Denmark",
      dedicated: "2004, May, 23",
      area: 25000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/copenhagen-denmark/400x250/copenhagen-denmark-temple-lds-278232-wallpaper.jpg"
    },
    {
      templeName: "Denver Colorado",
      location: "Centennial, Colorado, United States",
      dedicated: "1986, October, 24",
      area: 29117,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/denver-colorado/400x250/denver-temple-lds-999518-wallpaper.jpg"
    },
  ];
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const navHome = document.querySelector('#Home')
const navOld = document.querySelector('#Old');
const navNew = document.querySelector('#New');
const navLarge = document.querySelector('#Large');
const navSmall = document.querySelector('#Small');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
navHome.addEventListener('click', () => {
    generateTempleCards(temples);
    document.getElementById("heading").innerText = "All Temples";
});
navOld.addEventListener('click', () => {
    let oldTemples = temples.filter((temple) => parseInt(temple.dedicated.slice(0,5)) < 1900);
    generateTempleCards(oldTemples);
    document.getElementById("heading").innerText = "Temples Built Before 1900";
});
navNew.addEventListener('click', () => {
    let newTemples = temples.filter((temple) => parseInt(temple.dedicated.substring(0,5)) > 2000);
    generateTempleCards(newTemples);
    document.getElementById("heading").innerText = "Temples Built After 2000";
});
navLarge.addEventListener('click', () => {
    let largeTemples = temples.filter((temple) => temple.area > 90000);
    generateTempleCards(largeTemples);
    document.getElementById("heading").innerText = "Temples Larger than 90,000 sq ft";
});
navSmall.addEventListener('click', () => {
    let smallTemples = temples.filter((temple) => temple.area < 10000);
    generateTempleCards(smallTemples);
    document.getElementById("heading").innerText = "Temples Smaller than 10,000 sq ft";
});

function generateTempleCards(filteredTemples) {
    const templeHTML = filteredTemples.map((temple) =>
        `<section>
        <h3>${temple.templeName}</h3>
        <p><b>Location: </b>${temple.location}</p>
        <p><b>Dedicated: </b>${temple.dedicated}</p>
        <p><b>Size: </b>${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" height="250" width="400">
        </section>`    
    );
    document.querySelector("#cards").innerHTML = templeHTML.join("");
}
generateTempleCards(temples);
