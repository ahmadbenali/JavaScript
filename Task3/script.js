
var submitButton = document.getElementById("submitBtn");

var nameInput = document.querySelector("#customerName");

var foodSelect = document.getElementsByTagName("select")[0];

var resultMessage = document.getElementsByClassName("order-result")[0];

submitButton.onmouseover = function() {
  submitButton.style.backgroundColor = "#2e7d32"; 
};

submitButton.onmouseout = function() {
  submitButton.style.backgroundColor = "#4CAF50"; 
};

submitButton.onclick = function() {
  var customerName = nameInput.value.trim();
  var selectedOrder = foodSelect.value;

  if (customerName === "") {
    resultMessage.textContent = "Please enter your name first!";
    resultMessage.style.color = "#d32f2f"; 
  } else {

    resultMessage.textContent = "Hello " + customerName + "! Your order is " + selectedOrder + ".";
    resultMessage.style.color = "#1b5e20"; 
  }
};