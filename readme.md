# NSS Boy Bands and Vegetables

### Project Description 
This exercise loops through two different arrays and writes the elements from the separate arrays to their respective container elements in the DOM.

#### Boy Bands and Vegs Screen Grab Output
![Boy Bands and Vegs Screen Grab](https://raw.githubusercontent.com/SMITHsharon/boyBandsVegs/screen/screen/Boy%20Bands%20and%20Vegs%20Screen%20Grab.png)


### Project Specs
Given, the following `html` code:

	```
	<div id="boy-bands">
	</div>

	<div id="vegetables">
	</div>
	```

Given, the following `JavaScript` code:

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

- Loops through the `bands` and `vegetables` arrays. 
- Outputs each element in the arrays into their corresponding `html` `<div>` element. 
- Each item is written to a `<ul><li> ... </li></ul>` block element. 


### Technologies Used
- `html`
- `JavaScript`


### How To Run the App
#### (Node must be installed on your machine):
```
git clone https://github.com/SMITHsharon/boyBandsVegs.git
cd boybands
http-server -p 8080
This will show in your browser (at the console) at: http://localhost:8080
```


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)

