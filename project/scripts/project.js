const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.querySelector("#lastModified").innerHTML = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;

const newsButton = document.getElementById("subscribe");

if (newsButton) {
    newsButton.addEventListener("click", function() {
        window.open("newsletter.html", "_blank");
        });
}
const submitButton = document.getElementById("submitBtn");
if (submitButton) {
    submitButton.addEventListener("click", function() {
    const name = document.querySelector(".name").value;
    localStorage.setItem("fname", name);
    console.log(localStoarge.getItem("fname"));
    });
}
const thanks = document.querySelector("#thanksMsg");
if (thanks) {
    thanks.innerHTML = `${localStorage.fname}, thank you for subscribing to the Explore Skellefteå Newsletter!`;
}