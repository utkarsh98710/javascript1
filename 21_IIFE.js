//Immediately Invoked Function Expressions (IIFE) => jo function immediately implement ho jaye.
// parenthesis on  whole function .
//*** global scope ke pollution se dikkat hoti (variable ya declaration hoti he usko hatane ke liye use karte he )he kai baar usko hatane ke liye we use iffe***/
(function coffe(){
    console.log(`DB CONNECTED`);
})(); //#### if we add ; to this the next iffi function works.

//Arrow function in iffe 
(  (name) =>{ // this function not run 
    console.log(`DB CONNECTED TWO ${name}`);
})("Utkarsh") // defination and execution.

