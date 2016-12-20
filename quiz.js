
var parent  = ""
var thisIsTheEditText ="";
var inventory = [];
var selectTheseCards;
loadInventory();

// function takes in element and adds class  clicked-card, sets focus to text input/resets text field to ""
function changing(element, color) {
          element.classList.add("clicked-card")
          element.classList.add("clicked-card")
          document.getElementById("typingTextHere").focus()
          document.getElementById('typingTextHere').value = ""


}

// selects all cards and removes styling class
function resetStyleOnClick (clickedElement) {
        for(var i =0; i < selectTheseCards.length;  i++) {
          selectTheseCards[i].classList.remove("clicked-card")
        }
}







// This will put content into html once  html is built up through loop


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

// typing into description event

document.getElementById("typingTextHere").addEventListener('keyup', function editTheDescription(event){


            if(parent === "") {
              return
            }
         else if (event.code === "Enter" ) {
              return false;
          }

            else {

                    parent.querySelector('.card-text').innerHTML = ""
                    thisIsTheEditText = event.key;
                    parent.querySelector('.card-text').innerHTML += ""
                    parent.querySelector('.card-text').innerHTML += document.getElementById('typingTextHere').value

            }
 })
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
