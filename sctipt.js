function random256() { // function to generate a random number from 0 to 256
 return Math.floor(Math.random()*257);
}
function randomRgb() { // function to generate a random rgb value
  let num1 = random256(); 
  let num2 = random256(); 
  let num3 = random256(); 
  return `rgb(${num1}, ${num2}, ${num3})`
}
container = document.querySelector('.container'); //container that will hold all cells on etchsketch
let squaredRoot = parseInt(prompt("How long do you want the grid sides to be? MAX: 100")) //one side value. e.g if area 64X64, this is 64.
if (squaredRoot > 100) {
  squaredRoot = 100; // set a grid limit of 100x100
}
let squaredValue = squaredRoot * squaredRoot // total amount of divs to be made. (area)

for (let i = 0; i < squaredValue; ++i){ //loop to create the amount of divs needed
  let minWidth = `${400 / squaredRoot}px`;
  let div = document.createElement('div');
  div.classList.add('twobytwo');
  div.style.minWidth = minWidth;
  div.style.cursor = "pointer";
  container.appendChild(div);
}

let divList = document.querySelectorAll(".container div");

function eraseMode() {
  divList.forEach((currentValue) => { //iterate over each div to add event listener and change color
    currentValue.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "white";
    })
  })
  }

  function normalMode() {
    divList.forEach((currentValue) => { //iterate over each div to add event listener and change color
      currentValue.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
      })
    })
    }
  
    function rgbMode() {
      divList.forEach((currentValue) => { //iterate over each div to add event listener and change color
        currentValue.addEventListener("mouseover", (e) => {
          e.target.style.backgroundColor = randomRgb();
        })
      })
      }

    function resetMode() {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      squaredRoot = parseInt(prompt("How long do you want the grid sides to be? MAX: 100"));
      if (squaredRoot > 100) {
        squaredRoot = 100;
      }
      squaredValue = squaredRoot * squaredRoot;
      for (let i = 0; i < squaredValue; ++i){ //loop to create the amount of divs needed
        let minWidth = `${400 / squaredRoot}px`;
        let div = document.createElement('div');
        div.classList.add('twobytwo');
        div.style.minWidth = minWidth;
        div.style.cursor = "pointer";
        container.appendChild(div);
      }
      divList = document.querySelectorAll(".container div")
    }

  let normalButton = document.querySelector(".normal");
  normalButton.addEventListener("click", normalMode);
  let eraseButton = document.querySelector(".erase");
  eraseButton.addEventListener("click", eraseMode);
  rgbButton = document.querySelector(".rgb");
  rgbButton.addEventListener("click", rgbMode);
  let resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", resetMode);
