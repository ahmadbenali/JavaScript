var textBox = document.getElementById("textBox");
var fontSelect = document.getElementById("fontFamily");

var sizeSelect = document.getElementById("fontSize");

var italicCheck = document.getElementById("italicCheck");
var boldCheck = document.getElementById("boldCheck");
var underlineCheck = document.getElementById("underlineCheck");


fontSelect.onchange = function() {
    textBox.style.fontFamily = fontSelect.value;
};

   
sizeSelect.onchange = function() {
    textBox.style.fontSize = sizeSelect.value;
};

    
italicCheck.onchange = function() {
    if (italicCheck.checked) {
        textBox.style.fontStyle = "italic";
    } else {
        textBox.style.fontStyle = "normal";
    }
};

  
boldCheck.onchange = function() {
    if (boldCheck.checked) {
        textBox.style.fontWeight = "bold";
    } else {
        textBox.style.fontWeight = "normal";
    }
};

underlineCheck.onchange = function() {
    if (underlineCheck.checked) {
        textBox.style.textDecoration = "underline";
    } else {
        textBox.style.textDecoration = "none";
    }
};