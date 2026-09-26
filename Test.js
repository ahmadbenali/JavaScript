//const date=new Date();
// const date=new Date();

// const dayOfMonth=date.getDate();
// const month=date.getMonth();// from 0 to 11
// const year=date.getFullYear();
// const hours=date.getHours();
// const dayOfWeek=date.getDay();//day of week from 0 - 6

// console.log(month+1,"/",dayOfMonth,"/",year);//to make it more human readable
// console.log("thusday: ",dayOfWeek);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const customDate=new Date(2024,7,14,9,45,15);

console.log(customDate);

const Year=customDate.getFullYear();
const Month=customDate.getMonth();
const DayOfMonth=customDate.getDate();

const Hours=customDate.getHours();
const Min=customDate.getMinutes();
const Sec=customDate.getSeconds();

console.log(Month,"/",DayOfMonth,"/",Year);
console.log(Hours,"-",Min,"-",Sec);


