let userName=prompt("Enter your name: ");
let userAge=prompt("Enter your Age: ");
let userGender=prompt("Enter your Gender(Male/Female): ");

// while(userGender!=="Male" && userGender!=="Female"){
//     alert("You Should Enter Male Or Female");
//     userGender=prompt("Enter your Gender(Male/Female): ");
// }
if (userGender !== "Male" && userGender !== "Female") {
  alert("Invalid input! Setting to Other.");
  userGender = "Other";
}



if(userGender==="Male"){
    document.getElementById("info").innerHTML=`<h2>Welcome Mr. ${userName} </h2>`;
}else if(userGender==="Female"){
    document.getElementById("info").innerHTML=`<h2>Welcome Ms. ${userName} </h2>`;
}else document.getElementById("info").innerHTML=`<h2>Welcome ${userName} </h2>`;

let order;
let vaild=true;
if(userAge<16){
    document.getElementById("eli").innerHTML=`<h2> You are not eligible to place an order </h2>`;
}else{
    order=prompt("Choose an Order: Burger/Shawarma/Zinger");
    if(order!=="Burger" && order!=="Shawarma" && order!=="Zinger"){
        alert(".Invalid order. Please try again");
        vaild=false;
    }else alert("Your order is being prepared");
}

if(userAge>18 && vaild){
    document.getElementById("order").innerHTML=`<h2>Order Confirmed </h2>`;
}else if(userAge<18 || vaild){
    document.getElementById("order").innerHTML=`<h2>Order requires verification </h2>`;
}

let sta;
if(vaild){
    sta="Order Confirmed";
}else{
    sta="Order requires verification";
}


console.log(userName);
console.log(userGender);
console.log(userAge);

document.getElementById("final").innerHTML=`<h2>Final order:<br>${userName} <br> ${userAge} <br> ${userGender} <br> ${order} <br> ${sta}</h2>`;








