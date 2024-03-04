//how to make function and call it
function sayMyName(){
    console.log("U");
    console.log("T");
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}
sayMyName()

//Write a function to add two numbers.


// function addTwoNumbers1(number1,number2){  // function input time me jo bhi aata he use parameter 
//     console.log(number1 + number2); 
// }


 // at the call time we use arguments.
addTwoNumbers(3,"4")
addTwoNumbers(3,null)
addTwoNumbers(3,"a")

// addTwoNumbers(3,4) //we also store our result in variable.
// const result =addTwoNumbers(3,5)
// console.log("Result: ", result); // it store the vaalue but this  show undefined  as result.

//New way to right upper program.
function addTwoNumbers(number1, number2){


    // let result = number1 + number2
    // console.log("Utkarsh"); // this utkarsh print 
    // return result
    // console.log("Utkarsh"); //this statement cannot run always because it is write below return statement.

    // return number1+number2 // another way it will reduce to call a new variable.
}
const result = addTwoNumbers(3,5)
// console.log("Result", result);
//note if we not give any argument then it will print NAN

function loginUserMessage(username="ram"){
    if(username ===undefined){ // if(!username) this statement has same meaning
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// loginUserMessage("Harsh") //this value doesn't print anything it will run only. 
// console.log(loginUserMessage("Harsh"))
console.log(loginUserMessage("Utkarsh")) // this will give smallest value ram if we dont give any parameter but if we give then it will overight given value.
