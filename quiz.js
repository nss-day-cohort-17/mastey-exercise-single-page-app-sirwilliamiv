// THE COMPLETE API SET: EXPLORATORY

// Key: g48g6fa3bmuztnxvdvcyasdw

// ApplicationCar Research APP Key: g48g6fa3bmuztnxvdvcyasdw Secret: SJm3bcNMHw97XcmgFW9Fzxeu Status: active Created: 3 seconds ago
// Key Rate Limits
// 5 Calls per second
// 25  Calls per day

console.log("hey javascript")




// I will hold the json file native js object CHECKED
var inventory = [];
var selectTheseCards;
loadInventory();

// function takes in element and adds class  clicked-card, sets focus to text input

function changing(element, color) {
    element.classList.add("clicked-card")
    element.classList.add("clicked-card")
    document.getElementById("typingTextHere").focus()

       whenToStartTyping(element)

}


      function resetStyleOnClick (clickedElement) {
        for(var i =0; i < selectTheseCards.length;  i++) {
          selectTheseCards[i].classList.remove("clicked-card")
        }
      }

// changing the text in  description function
//
 // function  letMeChangeTheDescriptionForYou(newText) {


 //      document.querySelector('.card-text').innerHTML = ""
 //      document.querySelector('.card-text').innerHTML += newText


 // }
var parent  = ""
var thisIsTheEditText ="";
// this function is only called inside click event to prevent typing editing when no element selected

function whenToStartTyping(parent) {
// resetStyleOnClick()
document.getElementById("typingTextHere").addEventListener('keyup', function editTheDescription(event){
 parent.querySelector('.card-text').innerHTML += ""

            if(parent === "") {
              return
            }
         else if (event.code === "Enter" ) {
              return false;
          }
        else if (event.code === "Backspace" ) {
             thisIsTheEditText = thisIsTheEditText.substring(0, thisIsTheEditText.length -1)


            }
            else {

                    thisIsTheEditText = event.key;
                    // console.log(elementINeed)
                // parent.querySelector('.card-text').innerHTML = "" NEED TO RESET HTML TEXT
                parent.querySelector('.card-text').innerHTML += ""
                parent.querySelector('.card-text').innerHTML += thisIsTheEditText

            }
 })
    }



// THis will put content into html once  html is built up through loop
//

function populatePage (changethisname) {
  var createTheCard="";
  // Loop over the inventory and populate the page
    for(var i = 0; i < changethisname.cars.length; i++) {

            createTheCard += `<div class="card col-md-3">


                                     <h4 class="card-title">${changethisname.cars[i].make}</h4>
                                     <h5 class="card-title">${changethisname.cars[i].model}</h5>
                                     <h4 class="card-title">${changethisname.cars[i].price}</h4>


                                  <div class="card-text">${changethisname.cars[i].description}</div>


                              </div>`

    } //-------------endforloop

          sendToTheDom(createTheCard)

}

// =================================// this selects the card and changes the color====================================================


function changeBorderAndBackground(event) {
            var clickedElement = event.target
            resetStyleOnClick()

          if (clickedElement.parentElement.className === "card col-md-3" ){
                parent = clickedElement.parentElement

                  changing(parent)

          }
          else if( clickedElement.className === "card col-md-3") {
               parent = clickedElement
              changing(parent)


          }
            else { if (clickedElement.parentElement.className === "card col-md-3 clicked-card" || clickedElement.className === "card col-md-3 clicked-card") {
                    clickedElement.parentElement.classList.remove("clicked-card")
                    clickedElement.classList.remove("clicked-card")
                  }
            }


 }


// adding click event listener to each div
function loopTheCards(selectTheseCards) {
  // console.log("line 191:", selectTheseCards)
for(var i =0; i < selectTheseCards.length;  i++) {

      selectTheseCards[i].addEventListener('click',changeBorderAndBackground)
    }
  }

function sendToTheDom(builtHTMLFromPopulatePage) {
  // console.log(builtHTMLFromPopulatePage)
document.getElementById('putTheCardHere').innerHTML = builtHTMLFromPopulatePage

// load up array of  created divs
    selectTheseCards = document.querySelectorAll('.card')
    // console.log(selectTheseCards)
    loopTheCards(selectTheseCards)

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
