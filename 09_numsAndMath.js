//type is number
const score = 400
console.log(score);

//type is also a number
const balance = new Number(100)
console.log(balance);

//change number (any datatype) to string and follow string property:
console.log(balance.toString());

//two in one method it converts any (datatype) into strings and find its length:
console.log(balance.toString().length);

//for precision we use toFixed and it
// use in (e-commerce web site)
console.log(balance.toFixed(2));

//exaples of precion method
//priorty in precision method is decimal se pehle tak
const otherNumber1 =23.8966
const otherNumber2 =123.8966
const otherNumber3 =1123.8966
console.log(otherNumber1.toPrecision(3));
console.log(otherNumber2.toPrecision(4));
console.log(otherNumber3.toPrecision(3));

//convert number to us standard 
const hundreds =1000000
console.log(hundreds.toLocaleString('en-us'));
//numbers to indian standard
const value =1000000
console.log(value.toLocaleString('en-IN'));

//opeations on number in console:
//type number and press enter 
// and see function by click down arrow

//*****************MATH*********************************************
console.log(Math);
//Negative to positive
console.log(Math.abs(-4));
//Rounding off
console.log(Math.round(4.6));
//method to choose upper value;
console.log(Math.ceil(4.2));
//method to choose lower value;
console.log(Math.floor(4.2)); 
//min value 
console.log(Math.min(4,3,6,8));
//max value
console.log(Math.max(4,3,6,8));
//random value lie between 0 and 1
console.log(Math.random());
console.log(Math.random()*10);
// if we add 1 then we get min value 1 not 0 in some of the example
console.log(Math.floor(Math.random()*10)+1);

//trick for min and max
const min= 20
const max=50
console.log(Math.floor(Math.random()*(max-min+1))+min);