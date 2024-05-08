const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.querySelector("#lastModified").innerHTML = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;

const temperature = 7; //temp in celsius
const windSpeed = 14.4; //windspeed in km/h
const list = document.querySelector("#weather ul")

function calculateWindChill(temp, wind) {
    var windchill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
    return windchill.toFixed(0); 
}

const li = document.createElement('li');
if (temperature <= 10 && windSpeed > 4.8) {
    //call function and display windchill
    var windchill = calculateWindChill(temperature, windSpeed);
    li.innerHTML = `<b>Wind Chill:</b>${windchill} °C`;
}
else {
    //display n/a
    li.innerHTML = `<b>Wind Chill:</b>N/A`;
}
list.append(li);