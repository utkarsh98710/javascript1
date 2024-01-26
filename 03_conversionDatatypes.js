let score = "33abc"
let marks = 33
let physicsMarks ="33"
let result = null

//const {score} = req.body  -> we dont know 
//what is this dataype int or number so we use below method
// to identify the datatype of given value

console.log(typeof score); //ye hamari string he
console.log(typeof (score)); // this is also string
console.log(typeof marks);
console.log(typeof (physicsMarks));

let valueInNumber = Number(score) // we change score (string) datatypes to Number datatypes  "if some number is present "
//same work for undefined datatype
// true/false show -> 1/0 value
console.log(typeof valueInNumber);
console.log(valueInNumber); //not print directely score variable value print NaN 

let valueInNumber2 = Number(result) //change result value to the number
console.log(typeof valueInNumber2); 
console.log(valueInNumber2); //printing result value in valueInNumber2 -> 0

//"33" => 33
//"33abc" =>NaN
//true =>1;  false => 0

//numbers to Boolean conversion
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //output is true

// if we convert empty string to boolean it gives false;
// if we convert string to boolean it gives true example given below;

let isLoggedOut = "Utkarsh"
let booleanisLoggedOut = Boolean(isLoggedOut)
console.log(booleanisLoggedOut);  //output is true

// 1 => true; 0 => false
// ""=> false
//"Utkarsh"=> true

//number to string conversion

let someNumber = 33
let stringnumber = String(someNumber)
console.log(number);
console.log(typeof stringnumber);
