function newEvent(){
    count += 1;
    display.textContent = `Clicks: ${count}`;
    
    if (count >= 5) {
        display.style.color = "crimson";
        display.style.fontWeight = "bold";
    }
    
}

//Example 1:
document.getElementById('btn').onclick =  () =>{document.getElementById('msg').textContent = 'Clicked!';}


// Example 2: It's a different way 
const button = document.querySelector("#counter-btn");
const display = document.querySelector(".counter-display");

let count = 0;

button.onclick = newEvent;
