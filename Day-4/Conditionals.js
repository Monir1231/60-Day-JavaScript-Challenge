// Conditionals js
// if
let age = 23;
if (age <= 23) {
  console.log("big");
}

// else if
let num = 34;
if (num <= 3) {
  console.log("my fav number");
} else {
  console.log("fake number");
}

// Ternary
let a = 23;
let text = a > 15 ? "monir" : "rana";
console.log(text);

// JavaScript Switch Statement

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day); // Output will be the current day of the week
