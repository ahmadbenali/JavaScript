function reversesNumber(num){
  
  let numText = num.toString();
  let reversedText = "";
  for (let i = numText.length - 1; i >= 0; i--) {
    reversedText = reversedText + numText[i];
  }

  return Number(reversedText);
}

function evenOdd(){

  for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}
}

function insertDashes(num) {

  let str = num.toString();
  
  let result = str[0];
  for (let i = 1; i < str.length; i++) {
    let previousDigit = Number(str[i - 1]);
    let currentDigit = Number(str[i]);

    if (previousDigit % 2 === 0 && currentDigit % 2 === 0) {
      result = result + "-" + currentDigit;
    } else {
      result = result + currentDigit;
    }
  }

  return result;
}

function Agechecker(age) {
  if (age >= 18) {
    console.log("The user is Adult");
  } else {
    console.log("The user is Minor");
  }
}
let newN=reversesNumber(42647);
console.log(newN);
evenOdd();
let newNumber=insertDashes(42647); 
console.log(newNumber);
Agechecker(14);