// if- statement
// const isUserLoggedin = true
// const temperature = 41
// if (temperature===41) { // if true only code inside bracket will run . if false then not run.
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <,>,<=,>=,==,!=,===,!==


// scope problem
// const score = 200
// if(score>100){
//     const power = "fly" //*** if we use const keyword then power is only defined inside the {} 
//     //but if we use var keyword = power also defined outside the bracket but this is good error so we use const or let keyword*/
//     console.log(`user power: ${power}`);
// }
// show error
// console.log(`user power: ${power}`);


// new way to write this if condition
// const balance = 1000;
// if (balance>500) console.log("test"), console.log("test2");

//**nested if**
// if(balance<500){
//     console.log("less than");
// }else if (balance<750){
//     console.log("less thn 750");
// }else if (balance <900){
//     console.log("less than 750");
// }else{
//     console.log("less than 1200");
// }


// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true
// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }
// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("User logged in");
// }


// switch key
// const month = 3 // remember case sensitivity 
const month = "march"
switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march"); // if one case match then then all below case also print automatically if there is no break statement. Except default
        //break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("default case match");
        break;
}