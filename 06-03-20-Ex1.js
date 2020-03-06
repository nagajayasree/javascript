let date = new Date();
//console.log(date);

let day = date.getDay();
let dayList = ["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];
console.log("Today is : " + dayList[day]);
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let timePeriod = (hours < 12) ? "AM" : "PM";

console.log("Current Time is : " + hours + ":"+ minutes +":"+ seconds + " " + timePeriod);
