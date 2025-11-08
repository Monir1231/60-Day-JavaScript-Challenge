// Logical AND (&&) Operator

let age = 40
let idProof = true

if (age > 60 && idProof){
    console.log("Allowed")
} else {
    console.log("not Allow")
}



let a = 1000
let b = 56

let res = a && b
console.log(res)

//  Logical OR (||) Operator
// Check if at least one condition is true

let myage = 23
let hasGuardian = true;

if (myage > 34 || hasGuardian){
    console.log("Allowed")
} else{
    console.log("not Allowed")
}

// 3. Logical NOT (!) Operator

let isAllowed =true
console.log(!isAllowed)


// 4. Nullish Coalescing (??) Operator

let username = "monir";
let defaultName = "Guest";
console.log(username ?? defaultName);