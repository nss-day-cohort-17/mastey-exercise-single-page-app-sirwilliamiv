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

// function changingTheStyling(element, color) {
//     element = clickedElement.parentElement.classList.add("clicked-card")

// }



// =================================// this selects the card and changes the color====================================================

document.querySelector("body").addEventListener('click',function changeBorderAndBackground(event) {
            var clickedElement = event.target
            var something = clickedElement.className
            // if(alreadyhaveclass){ something === false}
            //   something to true
          if (clickedElement.parentElement.className === "card col-md-3" ){

                clickedElement.parentElement.classList.add("clicked-card")
                       document.getElementById("typingTextHere").focus()
                       whenToStartTyping()

          }
          else if( clickedElement.className === "card col-md-3") {

              clickedElement.classList.add("clicked-card")

            document.getElementById("typingTextHere").focus()
            whenToStartTyping()

          }
            else { if (clickedElement.parentElement.className === "card col-md-3 clicked-card" || clickedElement.className === "card col-md-3 clicked-card") {
                    clickedElement.parentElement.classList.remove("clicked-card")
                    clickedElement.classList.remove("clicked-card")
                  }
            }


 })


// changing the  description function
//
 function  letMeChangeTheDescriptionForYou(newText) {


      document.querySelector('.card-text').innerHTML = ""
      document.querySelector('.card-text').innerHTML += newText


 }


// -----------------------------------------------------------------------
// put a function to hold the timing of this event. for when a card is clicked

 var thisIsTheEditText ="";

 function whenToStartTyping() {

document.getElementById("typingTextHere").addEventListener('keyup', function editTheDescription(event){

if (event.code === "Enter" )
 {
    return false;
  }
  else if (event.code === "Backspace" ) {
   thisIsTheEditText = thisIsTheEditText.substring(0, thisIsTheEditText.length -1)

  }
  else{
          thisIsTheEditText += event.key;

        }
          // thisIsTheEditText -= event.key;
  // console.log(thisIsTheEditText)

    // if (how do i target elemnt just clicked?)
      // backSpace(thisIsTheEditText)
      letMeChangeTheDescriptionForYou(thisIsTheEditText) //-------> sending new text to description

 });

}









// -----------------------------------------------------------------------


// THis will put content into html once  html is built up through loop
//

function populatePage (changethisname) {
  var createTheCard="";
  // Loop over the inventory and populate the page
    for(var i = 0; i < changethisname.cars.length; i++) {

        // console.log("this is the i" ,createTheCard)
// /

            createTheCard += `<div class="card col-md-3">


                                     <h4 class="card-title">${changethisname.cars[i].make}</h4>
                                     <h5 class="card-title">${changethisname.cars[i].model}</h5>
                                     <h4 class="card-title">${changethisname.cars[i].price}</h4>


                                  <div class="card-text">${changethisname.cars[i].description}</div>


                            </div>`


    } //-------------endforloop

          sendToTheDom(createTheCard)


  // Now that the DOM is loaded, establish all the event listeners needed
  // activateEvents();
}









//-----------------------------------------------------------------------

function sendToTheDom(builtHTMLFromPopulatePage) {

  // console.log(builtHTMLFromPopulatePage)
document.getElementById('putTheCardHere').innerHTML = builtHTMLFromPopulatePage

// function whateveeventlistenr
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









// } //---------END activateEvents--------------
