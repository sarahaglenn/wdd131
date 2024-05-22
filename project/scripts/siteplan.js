const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.querySelector("#lastModified").innerHTML = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;



// sandbox

// function calculate(a, b, callback) {
//     callback(a + b);
// }

// function displayResult(result) {
//     console.log('The result is: ' + result);
// }

// calculate(2, 3, displayResult)