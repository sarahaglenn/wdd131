// loops.js
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i=0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

studentReport.forEach (function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

for (let item in studentReport) {
    if (item < LIMIT) {
        console.log(item);
    }
}

const options = {weekday: 'long'};
const today = new Date();
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
for (let i = 1; i <= DAYS; i++) {
    let nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
    item = document.createElement("li");
    item.textContent = nextdaystring;
    output[0].appendChild(item);
}