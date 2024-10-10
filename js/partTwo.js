const container = document.querySelector(".color");
const button = document.querySelector(".button");

let colorchange = "red"; 

button.addEventListener('click', function() {
  
  colorchange = colorchange === "red" ? "darkblue" : "red";

  
  container.style.color = colorchange;
  container.textContent = colorchange;
});