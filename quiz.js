// THE COMPLETE API SET: EXPLORATORY

// Key: g48g6fa3bmuztnxvdvcyasdw

// ApplicationCar Research APP Key: g48g6fa3bmuztnxvdvcyasdw Secret: SJm3bcNMHw97XcmgFW9Fzxeu Status: active Created: 3 seconds ago
// Key Rate Limits
// 5 Calls per second
// 25  Calls per day

console.log("hey javascript")




// I will hold the json file native js object CHECKED
var inventory = [];



loadInventory();

// function list
function activateEvents() {}
// i will reset styling  AFTER i'm not clicked on
function originalStyling() {

//   if focus = false {
//     set style to original
//   }
 }

// You should add a function that changes the thickness of the
// border of a car element, and changes its background color.
// The function must accept two arguments: THESE MAY NEED TO BE GLOBAL VARIABLES
// A car DOM element that was clicked on.
// var carClickedOn = document.target.this.querySelector("#dropDown");
// A color name of your choice (see behavior requirement 5 above).
//
 function changeBorderAndBackground() {
// addClass("yourNewClassgoeshere")
// var theDropDown = document.querySelector("#dropDown");
// theDropDown.classList.add("disableMenu");
// theDropDown.classList.remove("disableMenu");
 }



// THis will put content into html once  html is built up through loop
function populatePage (inventory) {
  // Loop over the inventory and populate the page

  // grab conent from json and  insert into html

  // Now that the DOM is loaded, establish all the event listeners needed
  activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete

function loadInventory (callback) {
  var inventoryLoader = new XMLHttpRequest();
  inventoryLoader.addEventListener("load", function (e) {
      inventory = JSON.parse(e.target.responseText)
      console.log(inventory)




    });
  inventoryLoader.open('GET', 'inventory.json')
  inventoryLoader.send()
}

// Create an array of cars in the inventory.json file
// (see example structure below). Put at least three cars in the array.
//
//
//
// //
// //
// When your page first loads, you need to use an XHR to
// // load the contents of the JSON file, and parse them into a native JavaScript object.
//
//
// Loop over your array of cars and build up an HTML string to build a card for each car.
//  Also, use Bootstrap to create rows. Each row should contain 3 columns.
//  Make sure you have a parent element with a class of container.
//  Hint: You must build up the entire string of columns/rows before injecting into the DOM.
//  Use a counter variable to know when to close a row after three columns
//
//
//
// Put a standard Bootstrap navbar element at the top of your page.
// Put a text input field in the navigation bar.


// Make sure you display all properties of the car in the DOM. Basic styling is up to you.


// Make sure that each car card element has a CSS class which adds
// a black border around it.


// When you click on one of the car elements, change the width
// of the border to a higher value, and change the background color to any other color of your choosing.


// Also, on click of the car element, clear the value of the text
// input in the navbar, and put the cursor in the text input.
//
// When you start typing into the navbar's text input, the description, and only that property,
//  of the currently selected car should be bound to what you are typing in and match it exactly.
