// singleton // koi bhi constructor se banate he tab ye ek object banta he ye apne tarah ka ek hi object he 
//(jab bhi hum literal ki tarah use karte he tab literal nahi banta he may be constructer se ban sakta he )

// how to declare objects 
// object literals

// use symbol as a key
const mySym = Symbol("key1")

const jsUser = {
    name: "Utkarsh",
    "Full name": "Ukarsh Gupta", // not possible to access this value we use this by square brackets.
    [mySym]: "mykey1",
    age:19,
    location:"Delhi",
    email:"utkarshgupta@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsUser.email);
// console.log(jsUser[email]); error
// console.log(jsUser.Full name); error
console.log(jsUser["Full name"]);
console.log(jsUser.mySym); //****it print mykey1 but datatype is not used as symbol****. 
console.log(typeof jsUser.mySym); //it print string but we want its datatypes as symbol square brackets

//*****One way to use as symbol of my variable. use square brackets****
console.log(jsUser[mySym]);
console.log(typeof mySym);

//Accesing way in Array
myArray = ["U","G"]
const name=myArray[0]
console.log(name);

//Acces in objects. key is also given:


//change email value in objects
jsUser.email ="utkarsh005@gmail.com"

//freze value in object
// Object.freeze(jsUser)
jsUser.email ="utkarsh6659@gmail.com.com"
console.log(jsUser);

//to add greetings

jsUser.greeting = function(){
    console.log("Hello JS User");
}

// we want to reference name in this object. so we convert this into backticks first
jsUser.greetingtwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());




