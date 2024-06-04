//Selecting elements

let light = document.querySelector("#light")
let dark = document.querySelector("#dark")
let bod1 = document.querySelector("#bd")
let pTags = document.getElementsByClassName("white")
let h2 = document.getElementsByClassName("yellow")

//Changing the elements when the button is clicked for light or dark mode

light.addEventListener("click", function(event){
  for(let i = 0; i < pTags.length; i++){
    pTags[i].style.color = "black"
  }

  for(let x = 0; x < h2.length; x++){
    h2[x].style.color = "navy"
  }
  
  bod1.style.backgroundColor = "white"
  
})  

dark.addEventListener("click", function(event){
  for(let i = 0; i < pTags.length; i++){
    pTags[i].style.color = "white"
  }

  for(let x = 0; x < h2.length; x++){
    h2[x].style.color = "#ffff99"
  }

  bod1.style.backgroundColor = "black"

})  

//Changing to hover over image

let security = document.querySelector("#secure")

security.addEventListener("mouseover", function(event){
  security.src = "hacked.jpeg"
})

security.addEventListener("mouseout", function(event){
  security.src = "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
})


