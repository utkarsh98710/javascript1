// always store strings in const keyword:
//This is old stntax ;
const name="Utkarsh"
const repocount=5
console.log(name+repocount+"value");

//New syntax (backticks): //string interpolation
// 
console.log(`hello my name is ${name} ans my repo count is ${repocount}`);
//string declaration
const gameName = new String('utkarsh-gupta') //new keyword

//methods or function of strings:
console.log(gameName[0]);
console.log(gameName.__proto__); //direct acces
//length of string
console.log(gameName.length);
//Change to upper case
console.log(gameName.toUpperCase()); //original value not change stack memory
//find character at 2 index:
console.log(gameName.charAt(2));
//find index of t character:
console.log(gameName.indexOf('t'));
//divide a string into a subarray
 const newString = gameName.substring(0,4); //starting from 0 and take 4 character: last value not included;
 console.log(newString);

 //slice a string;
 const anotherString = gameName.slice(-12 ,5); //we also give negative value it start from back::
 console.log(anotherString);

 //trim function: it removes starting space between string
 //trim start ans trim end also a function
 const newStringOne ="   utkarsh   "
 console.log(newStringOne);
console.log(newStringOne.trim());


//replace function:-->
//if we give space between utkarsh gupta then browser automatically write%20 in code so
//we want to remove this 
const url = "https://utkarsh.com/utkarsh%20gupta"
console.log(url.replace('%20','-')) //%20 ko replace kar do - se in string me

// include finction check substring present or not
console.log(url.includes('utkarsh')) 

//string to array based on dash or anything function :->

console.log(gameName.split('-'));

