const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.querySelector("#lastModified").innerHTML = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;

const products = [
    {
      id: "fc-1888",
      name: "Flux Capacitor",
      avgeragerating: 4.5
    },
    {
      id: "fc-2050",
      name: "Power Laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "Time Circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "Low Voltage Reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Warp Equalizer",
      averagerating: 5.0
    },
  ];

  const optionsHTML = products.map((p) => 
    `<option value="${p.id}">${(p.name)}</option>`
  );
  optionsHTML.unshift(`<option value="">Select a Product... &#9662;</option>`)
  document.getElementById("productName").innerHTML = optionsHTML.join("");

  // Use JavaScript to populate the Product Name options where the array's name field is used for the select option display and the array's id is used for the value field.  `<option value="">Select a Product...</option>` + 