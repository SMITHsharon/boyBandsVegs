# NSS Boy Bands and Vegetables

### Project Description 
This exercise loops through two different arrays, to output paired elements from the two arrays to the DOM.

#### Boy Bands and Vegs Screen Grab Output
![Boy Bands and Vegs Screen Grab](...)


### Project Specs
Given, the following `html` code:

	```
	<div id="boy-bands">
	</div>

	<div id="vegetables">
	</div>
	```

Given, the following `javascript code:

	```
	var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
	var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

	// The number of loops to perform (what if the array changes?)
	var loopCount = 5;

	// Keep track of which band we're on in the loop
	var currentBand = "";

	// Keep track of which veggie we're on in the loop
	var currentVeggie = "";

	// Get a reference to the appropriate DOM element for bands
	var bandElement = document.getElementById(???);

	// Get a reference to the appropriate DOM element for vegetables
	var veggieElement = ???;

	// Start looping
	for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

		// Add the band names into the correct <div>
	  	currentBand = ???;

		// Add the veggie names into the correct <div>
		currentVeggie = ???;
	}
	```

- Looped through the two `bands` and `vegetables` arrays. 
- Output each element in the arrays into their corresponding `html` `<div>` element. 
- Each item is written to a `<ul><li> ... </li></ul> block element. 


### Technologies Used
- `html`
- `javascript`


### How To Run the App
#### (Node must be installed on your machine):
```
git clone https://github.com/SMITHsharon/boyBandsVegs.git
cd boybands
npm install http-server -g
http-server -p 8080
```

This will show in your browser (at the console) at: `http://localhost:8080`


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)

