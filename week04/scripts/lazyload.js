const today = new Date();
document.getElementById("currentYear").innerHTML = today.getFullYear();
document.querySelector("#lastModified").innerHTML = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;
