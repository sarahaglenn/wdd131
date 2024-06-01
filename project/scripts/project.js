const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.querySelector("#lastModified").innerHTML = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;

const newsButton = document.getElementById('#subscribe');
if (newsButton) {
    newsButton.addEventListener("click", function() {
        window.open("newsletter.html", "_blank");
    });
}
