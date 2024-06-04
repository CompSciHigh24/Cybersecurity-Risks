let light2 = document.querySelector("#light2")
let dark2 = document.querySelector("#dark2")
let bod2 = document.querySelector("#bd2")
let pTags = document.getElementsByClassName("white")
let h2 = document.getElementsByClassName("yellow")
//Changing the elements when the button is clicked for light or dark mode

light2.addEventListener("click", function(event){
  for(let i = 0; i < pTags.length; i++){
    pTags[i].style.color = "black"
  }

  for(let x = 0; x < h2.length; x++){
    h2[x].style.color = "navy"
  }

  bod2.style.backgroundColor = "white"

})  

dark2.addEventListener("click", function(event){
  for(let i = 0; i < pTags.length; i++){
    pTags[i].style.color = "white"
  }

  for(let x = 0; x < h2.length; x++){
    h2[x].style.color = "#ffff99"
  }

  bod2.style.backgroundColor = "black"

})  
