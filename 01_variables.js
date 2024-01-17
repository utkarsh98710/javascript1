const accountId = 123456
let accountEmail = "utkarshgupta@gmail.com"
let accountPassword = "Me nahi bataunga"
accountCity = "Delhi"

// accountId = 2 //not allowed in js beacause it is written in constant keyword
accountEmail ="utkarsh@#gamil.com"
accountPassword = "me abhi bhi nahi bataunga"
accountCity = "Hydrabad"
let accountState; // we can put the value of accountState later in the project so we use let variable;


//To print all value in table we use table method
console.table([accountId, accountEmail,accountPassword,accountCity,accountState])

/* prefer not to use var variable 
because of issue in block scope and functional scope 
*/

// console.log(accountId); account does not change beacuse it is written in constant variable
console.log("Utkarsh")
console.log(12)