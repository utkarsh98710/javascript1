// 1)JavaScript is a dynamically typed language, which means that data types of variables are determined 
//by the value they hold at runtime and can change throughout the program as we assign different values to them.

//2)In a statically typed language, data types are defined during compile time and cannot change during runtime. This 
//behavior is because of static type checking. In contrast, dynamic typing allows variables to change their data type during runtime

// Primitive datatypes
//7 types : string , Number, Boolean , null , undefined , Bigint , Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  //undefined

//how to declare symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId); //give false because both are different
const bigNumber=313154643153135n //bigint example


//Reference (Non Primitive)
//Array, Objects, Function
//all non (primitive) datatypes has object type but function has objectfunction
const heros = ["ironman","captain america","thor","hulk"];
let myObj = {    //curly bracket me jo bhi he vo object he 
    name:"Utkarsh",
    age:19,
}

//declare a function
const myFunction = function(){
    console.log("Hi Utkarsh"); 
}

//how to find a datatype 
console.log(typeof bigNumber);
console.log(typeof outsideTemp);  // this is object datatypes
console.log(typeof scoreValue);
console.log(typeof heros);
console.log(typeof myFunction);
console.log(typeof anotherId);