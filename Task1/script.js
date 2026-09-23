function showMenu(menu){
    document.write("<h2>--- Menu ---</h2><ul>");
    for(let food of menu){
        document.write(`${food.name}<br>`);
    }
}
function availableFood(foodName,menu){
document.write("<h2>--- Your Order ---</h2>")
    for(let i in menu){
        if(foodName===menu[i].name)
            document.write(`${menu[i].name}<br>${menu[i].category}<br>${menu[i].price}<br>${menu[i].available}<br>`);
            return true;
    }
    return false;
}

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
    document.write(`<h2>Welcome Mr. ${userName} </h2>`);
    //document.getElementById("info").innerHTML=`<h2>Welcome Mr. ${userName} </h2>`;
}else if(userGender==="Female"){
    document.write(`<h2>Welcome Ms. ${userName} </h2>`);
    //document.getElementById("info").innerHTML=`<h2>Welcome Ms. ${userName} </h2>`;
}else document.write(`<h2>Welcome ${userName} </h2>`);

let order;
let vaild=true;
if(userAge<16){
    document.write(`<h2> You are not eligible to place an order </h2>`);
    //document.getElementById("eli").innerHTML=`<h2> You are not eligible to place an order </h2>`;
}else{
    order=prompt("Choose an Order: Burger/Shawarma/Zinger");
    if(order!=="Burger" && order!=="Shawarma" && order!=="Zinger"){
        alert(".Invalid order. Please try again");
        vaild=false;
    }else alert("Your order is being prepared");
}

if(userAge>18 && vaild){
    document.write(`<h2>Order Confirmed </h2>`);
    //document.getElementById("order").innerHTML=`<h2>Order Confirmed </h2>`;
}else if(userAge<18 || vaild){
    document.write(`<h2>Order requires verification </h2>`);
    //document.getElementById("order").innerHTML=`<h2>Order requires verification </h2>`;
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

document.write(`<h2>Final order:<br>${userName} <br> ${userAge} <br> ${userGender} <br> ${order} <br>`);
//document.getElementById("final").innerHTML=`<h2>Final order:<br>${userName} <br> ${userAge} <br> ${userGender} <br> ${order} <br> ${sta}</h2>`;

// =================================TASK 2=============================================================================
let menu=[
    {
        "name":"Burger",
        "price":20,
        "category":"Fast Food",
        "available":true
    },{
        "name":"Shawarma",
        "price":15,
        "category":"Fast Food",
        "available":true
    }
]

showMenu(menu);

let foodName=prompt("Enter food name for the menu: ");

while(!availableFood(foodName,menu)){
    foodName=prompt("Renter food name for the menu: ");
}














