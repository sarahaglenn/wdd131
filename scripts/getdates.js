const today = new Date();

document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = new Date(document.lastModified);