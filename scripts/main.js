// Tasks:

// document.getElementById
// Find just the title
let title = document.getElementById('title')
// when clicking on element with class title, a message is displayed to the console
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"]
var colorIndex = 0
var toggle = false
var myTimer
title.addEventListener("click", function() {
  if (!toggle) { 
    myTimer = setInterval(function() {
      title.style.color = colors[colorIndex]
      colorIndex++
      if (colorIndex === colors.length) colorIndex = 0
    }, 75) 
    toggle = true
  } else {
    clearInterval(myTimer)
    toggle = false
  }
})
// Change the text of the title
title.innerHTML = "Choose Your Magical Ingredients"
// Change the style of the title
title.style.color = "orange"
// Add a class to the title
title.className += " princess-font"

// document.querySelectorAll
// Find all the list items
// Find all list items of a specific list
// Add a class of .green to all .plants list items
// Add a class of .blue to all .liquids list items
// Add a class of .red to all .animal-parts list items

// document.createElement
// Create a new ingredient from scratch!
// Add it to one of the lists at the top
// Add it to one of the lists at the bottom
// Add it to one of the lists in the middle

// element.remove()
// Find and remove specific items

//interact with ingredients
var lis = document.querySelectorAll("li")
for (let i = 0; i < lis.length; i++) {
  var li = lis[i]
  li.addEventListener("click", function(event) {
    event.target.className += " selected"
    event.target.style.outline = "1px solid orange"
    let cart = document.getElementsByClassName("selected")
    let itemString = "<br>"
    for (let i = 0; i < cart.length; i++) {
      itemString += cart[i].textContent + "<br>"
    }
    document.querySelector(".itemList").innerHTML = itemString
  })
}