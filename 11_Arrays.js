 //Array:
 // 1) array in js are resizable and can contain a mix of different datatype.
 // 2) array in js are not asssociative arrays and so array elements cannot be accessed using arbitary string index.
 // 3) array in js are zero index.
 //**** 4) array in js copy operations create shallow copies . all standard built //
 //in copy operation with any js objects create shallow copies, rather than deep copies****

 //shallow copy of an object is a copy whose properties share the same reference
 // (point to the same underlying values) as those of the source object from whic the copy was made.(jo bhi change karoge vo original array me bhi hoga)
 const myArr=[0,1,2,3,4,5,true,"utkarsh"]  
 const myHeros=["thor","iron-man","hulk","captain -america"]
 const myArr2=new Array(1,2,3,4)
// how to access array 
console.log(myArr[0]);

//see array in console and you will see 2 prototype and length of the array in console 

//Array Methods:

myArr.push(6)
myArr.pop()  //remove last index from the array

myArr.unshift(0) //add 0 to the start of the array in this we shift all the value in array
myArr.shift()  // no parameter is given
console.log(myArr.includes(9)); // this method give ans in boolean type
console.log(myArr.indexOf(3));
console.log(myArr);

//****.join add all the elments of an array into a string separated by the specified separator
const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);  // change array to string

//Slice, Splice methods

//slice= return a copy of a section of an array.
console.log("A",myArr); //original array

//start with 1 and include only 1 and 2 not include 3(last-range).
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr); //same to the original array

// splice method:
//it include higher index also on in array (last-range)
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("c",myArr); // not equal to the original array.
//the splice part is remove from the original array.