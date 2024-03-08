// this = offer to current context
// Make an object.
const user = {  // hamara current context only in curly braces tak he 
    username: "Utkarsh",
    price: 999,

    //making of method which is function . this shows only if user login into website.
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); // to use current context we use this keyword.
        // console.log(this);
    }

}

// user.welcomeMessage() // show = Utkarsh , welcome to website
// user.username = "sam"
// user.welcomeMessage() // show = sam , welcome to website

console.log(this); // current context show empty this refer 
//to node envinvironment this refer to empty object.

//********** browser ke andar global object he vo he window object so this refer to window in browser. console.log(this)****/

// "this"  wont be run inside a function
// function chai(){
//     let username = "Utkarsh"
//     console.log(this); //this method wont work in functions
// }
// chai()


// const chai = function (){
//     let username = "Utkarsh"
//     console.log(this.username); // show undefined
// }
// chai()

//arraow function
// const chai = () =>{
//     let username = "Utkarsh"
//     console.log(this.username); // show undefined
// }
// chai()

//arrow function.. with Explicitely return with use return keyword..
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }


//(Implicet return) we dont use parenthesis. and dont use return keyword.
const addTwo1 = (num1,num2) =>  num1 + num2

const addTwo2 = (num1,num2) =>  (num1 + num2)

const addTwo3 = (num1,num2) =>  {username : "Utkarsh"}
const addTwo4 = (num1,num2) =>  ({username : "Utkarsh"})

// How we return an object.


console.log((addTwo1(3,4)));
console.log((addTwo2(3,4)));
console.log((addTwo3(3,4))); // undefined because object ko return karne ke liye parenthesis me band karo.
console.log((addTwo4(3,4)));

const myArray = [2,5,7,1,3]
myArray.forEach()