//Immediately Invoked Function Expressions (IIFE) => jo function immediately implement ho jaye.

// if we write two iife in code editor they will not run only when we add ; at the end of first iife function..
// parenthesis on  whole function .
//*** global scope ke pollution se dikkat hoti (variable ya declaration hoti he usko hatane ke liye use karte he )he kai baar usko hatane ke liye we use iffe***/
(function coffe(){
    // this is named iife  because this function has some name.
    console.log(`DB CONNECTED`);
})(); //#### if we add ; to this the next iife function works.

//Arrow function in iife . unnamed iife
(  (name) =>{ // this function not run if we dont add ; to above function,, name is parameter 
    console.log(`DB CONNECTED TWO ${name}`);
})("Utkarsh") // defination and execution.



