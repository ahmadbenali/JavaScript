const usernameRegex = /^\S+$/;
const passwordRegex = /^(?=.*\d).{8,}$/;
const phoneRegex = /^07\d{8}$/;

const submit = document.getElementById('submitBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');
const order = document.getElementById('order');



submit.onclick = function(e) {
    e.preventDefault(); // Prevents the browser from reloading the page
    /* A <button> inside a <form> defaults to type="submit". When you click it, JavaScript updates #display, 
    but the browser instantly refreshes the entire page, wiping out your changes before you can see them.
    */
    
    let isValid = true;

    if (!usernameRegex.test(usernameInput.value)) {
            isValid = false;
    }

    if(!passwordRegex.test(passwordInput.value)) {
            isValid = false;
    }

    if(!phoneRegex.test(phoneInput.value)) {
            isValid = false;
    }

    if(isValid) {
        document.getElementById('display').innerHTML=`Display Welcome, ${usernameInput.value}`;
        console.log('Form is valid. You can submit the form.');
    }else {
        console.log('Form is invalid. Please correct the errors before submitting.');
    }

    localStorage.setItem("userOrder", order.value);
    sessionStorage.setItem('username', usernameInput.value);

    const savedOrder = localStorage.getItem("userOrder");
    document.getElementById('display1').innerHTML=`Saved Order: ${savedOrder}`;

    const savedUsername = sessionStorage.getItem('username');
    document.getElementById('display2').innerHTML=`Saved Username:  ${savedUsername}`;
}

