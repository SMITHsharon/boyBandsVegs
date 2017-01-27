var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
// var loopCount = 5;
var loopCount = bands.length; // so this is way better; duh. Except for constants, like pi

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Loop through the two arrays provided (bands and vegetables) and output 
// each element in the arrays into their corresponding HTML <div> element. 
// Ensure that each item is in a block element (e.g. li, div, p. etc...)

bandElement.innerHTML = "<ul>"; // write to unordered bullet list
veggieElement.innerHTML = "<ul>";
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) { // this was given

  // Add the band names into the correct <div>
  currentBand = bands[loopTracker]; // this is given
  bandElement.innerHTML += "<li>" + currentBand + "</li>";

  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[loopTracker]; // given
  veggieElement.innerHTML += "<li>" + currentVeggie + "</li>";
}
bandElement.innerHTML += "</ul>"; // finish it off
veggieElement.innerHTML += "</ul>";
