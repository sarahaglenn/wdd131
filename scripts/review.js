const visits = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visits.textContent = numVisits;
} else {
    visits.textContent = `Thank you for submitting your first review.`
}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
