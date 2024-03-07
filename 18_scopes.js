//{} -> scope
// let a=10
// const b=20
// var c=30

// var variable ko hum is liye laye kyuki let and const 
//hamare block scope ki tarah kam nahi karta he . 

//{} jab ye kisi function ke sath aata he ya if else ke 
//sath aata he to ise scope bola jata he . {} curly braces object me bhi aata he vo alag hota he

//var c=300; //this will not print 300 because we have declare a  block scope .

let a =300;
if (true){  // iske bhar jo bhi likha he vo global scope he.ye block scope he . iske andar jo bhi value likhte he vo iske bhar nahi jani chahiye 
    let a=10
    const b=20
    var c=30  // if we write c only this will also print value irrespective of variable
    console.log("Inner: ",a); // inner a ki value 10 he outside 300 he.
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i]; // we want i ki value andar rahe bhar nahi aaye .use block scope.
    
// }
// console.log(a); a is not defined before declare a global variable
// console.log(b); b is not defined
console.log(c);  //c is defined outside a scope this is it problem
console.log(a);