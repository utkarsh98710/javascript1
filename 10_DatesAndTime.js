//Dates
let myDate =new Date()
console.log(myDate);
//convert date into string
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString()); 
//more examples by add ("to") to my date 

//** Date is object in javascript.
console.log(typeof myDate);

//way of declaring dates
let myCreatedDate =new Date(2023,0,23)  //month start from 0 in js:
console.log(myCreatedDate.toDateString());

let myCreatedDate2 =new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString());

//Another format to deaclare dates:
let myCreatedDate3 =new Date("2024-03-23") 
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 =new Date("01-14-2023")  // mm--dd--yy
console.log(myCreatedDate4.toLocaleString());

//*********************************************************
//**Time-Stamp in Js**:

// it is used in js to designs poles and quizes;
let myTimeStamp = Date.now()
console.log(myTimeStamp);

//This function is used to compare values in milisecond
console.log(myCreatedDate.getTime());

//**important concept:
//convert to second: we divie to 1000 but it also include 
//decimal values to it solution is we Math.floor function 
console.log(Math.floor(Date.now()/1000));

//New methods: and method is exuted by this ():
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); //here month is started with 0 that why we 
//add 1 to get exact month which we want.
console.log(newDate.getDay());


//new way to represent Dates and month.
'${newDate.getMonth()+1} and the month is '

//In below method we define object and we define many parameter
//first we choose interlisation which we want and write in string format
//***//all property shown us by clcking ctrl+space in between {}
newDate.toLocaleString('default',{
     weekday: "long",
     timeZone:'choose'
})


