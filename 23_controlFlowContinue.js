const userEmail = "utkarsh@gmail.com" // we let this is true value
// const userEmail = [] this is also run as true value.not use this type of array
if (userEmail) {
    console.log("Got the user email");
}else{
    console.log("Don't have user email");
}

//**falsy values**
//false, 0, -0, BigInt->0n, "", null, undefined ,NaN(not a number)

//truthy values if value is in string this is called truthy value.
// "0", 'false', " ", [],{}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// how to detect object is empty
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// below code run in console. interview related
// 1) false == 0 -> true
// 2) false == '' -> true
// 3) 0 == '' -> true

// Nullish Coalescing Operator (??): null undefined
// callback operator
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = undefined  ?? 10 ?? 20 //first value assign
console.log(val1);

// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");