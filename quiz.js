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
 document.querySelector('body').addEventListener('click',function changeBorderAndBackground(event) {
      if(event.target.className === "card col-md-4") {
// ----------adding clicked styling
            event.target.classList.toggle("clicked-card")
// ---------setting focus after click
            document.getElementById("typingTextHere").focus()


      }

 })



// THis will put content into html once  html is built up through loop
function populatePage (changethisname) {
  var createTheCard="";
  // Loop over the inventory and populate the page
    for(var i = 0; i < changethisname.cars.length; i++) {

        // console.log("this is the i" ,createTheCard)
// /
//     [i].make  .model  .price .description
            createTheCard += `<div class="card col-md-4">
                                <img class="card-img-top" src="http://tinyurl.com/hr23xpt" alt="Card image cap">
                                  <div class="card-block">
                                     <h4 class="card-title">${changethisname.cars[i].make}</h4>
                                     <h5 class="card-title">${changethisname.cars[i].model}</h5>
                                     <h4 class="card-title">${changethisname.cars[i].price}</h4>


                                  <p class="card-text">${changethisname.cars[i].description}</p>
                                <a href="#" class="btn btn-primary">edit description?</a>
                                 </div>
                            </div>`


    } //-------------endforloop

sendToTheDom(createTheCard)
// console.log(createTheCard)
  // Now that the DOM is loaded, establish all the event listeners needed
  // activateEvents();
}

      function sendToTheDom(builtHTMLFromPopulatePage) {

  // console.log(builtHTMLFromPopulatePage)
        document.getElementById('putTheCardHere').innerHTML = builtHTMLFromPopulatePage
        }

          // Load the inventory and send a callback function to be
          // invoked after the process is complete

          function loadInventory (callback) {
            var inventoryLoader = new XMLHttpRequest();
            inventoryLoader.addEventListener("load", function (e) {
                inventory = JSON.parse(e.target.responseText)
                // console.log(inventory)

                populatePage(inventory)
});
  inventoryLoader.open('GET', 'inventory.json')
  inventoryLoader.send()
}

// function activateEvents(event) {

// // how many events
// // what events
// if(event === 'click') {
// // / When you click on one of the car elements, change the width
// // of the border to a higher value, and change the background color to any other color of your choosing.

// // var theDropDown = document.querySelector("#dropDown");
// // theDropDown.classList.add("disableMenu");
// // theDropDown.classList.remove("disableMenu");
// // Also, on click of the car element, clear the value of the text
// // input in the navbar, and put the cursor in the text input.
// //
// //
// // click  function(event){
// // if(target.element.img === true){
// // add thicker border + background color to different color}})
// //
// // when clicking on card focus and cursor move to text box
// // click, function(event){
// // if(click.target.element === card){change focuse to #textBox}})
// //
// }

// if (event === 'keyup')
// // 'keyup', function(event) {
// //  if (focus === #textbox ) {
// //      catch typing and add to variable.
// //      input typing into description of  selected element
// //
// //
// //    }
// //
// // })
// // when should they be activated



// } //---------END activateEvents--------------



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







//
// When you start typing into the navbar's text input, the description, and only that property,
//  of the currently selected car should be bound to what you are typing in and match it exactly.
