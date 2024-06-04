let light3 = document.querySelector("#light3")
let dark3 = document.querySelector("#dark3")
let bod3 = document.querySelector("#bd3")
let pTags = document.getElementsByClassName("white")
let h2 = document.getElementsByClassName("yellow")

//Changing the elements when the button is clicked for light or dark mode

light3.addEventListener("click", function(event){
  for(let i = 0; i < pTags.length; i++){
    pTags[i].style.color = "black"
  }

  for(let x = 0; x < h2.length; x++){
    h2[x].style.color = "navy"
  }

  bod3.style.backgroundColor = "white"

})  

dark3.addEventListener("click", function(event){
  for(let i = 0; i < pTags.length; i++){
    pTags[i].style.color = "white"
  }

  for(let x = 0; x < h2.length; x++){
    h2[x].style.color = "#ffff99"
  }

  bod3.style.backgroundColor = "black"

})  
