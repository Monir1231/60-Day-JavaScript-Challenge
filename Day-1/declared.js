// js variable
let name = "Monir"; // Variables are containers for storing data.



//  let
let games = "pubg"; // let have Block Scope,let must be Declared before use, cannot be Redeclared in the same scope
console.log(games);

{
  let y = 2;
}
console.log(y); //  x CAN not be used here

  let u = "John Doe"; // let can not be redeclared.
  let u = 20;

let num = 10;
num = 30;
console.log(num); // let can be Reassign




// var
{
  var x = 78;
}
console.log(x); // var always have Global Scope.

var m = "John Doe"; // var can be redeclared.
var m = 20;

var num1 = 10;
num1 = 30;
console.log(num); // let can be Reassign




// const

const myname = "Monirul";
console.log(myname);

const p = "John Doe"; // conat can not be redeclared.
const p = 20;
console.log(p);

const Mynum = 100;
Mynum = 30;
console.log(num); // let can  not be Reassign
