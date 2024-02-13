const marvel_heros = ["Thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//push in (existing array), but concate-method new array return karta he .
marvel_heros.push(dc_heros) // Array has been pushed in existing array.
console.log(marvel_heros); //nested array has been created.

//Accesing of nested array given below
console.log(marvel_heros[3][0]);
// In marvel_heros array at index 3 so new array is found and we acces element of new array by noraml way.

//Another way to concate two array. by (concate-method) returns a new array.
const allHeros = marvel_heros.concat(dc_heros) //nested array is created
console.log(allHeros);

//Another way to concate the array is **(Spread-method)**
//This method breaks the element of array in single element.
const all_new_heros =[...marvel_heros,...dc_heros]

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
//how to handle above condition using [flatArr method]
//Retruns a new array with all sub-array elements concatenated 
//into it recursively up to the specified depth.
const real_another_array = another_array.flat(Infinity) //in this function we have to give depth(how many array we want) for all we  give (infinity) as depth.
console.log(real_another_array);

//How to check this is array or not.
console.log(Array.isArray("Hitesh")); //return bool value.
//convert Hitesh to array.
console.log(Array.from("Hitesh"));

//Interisting Case
console.log(Array.from({name:"hitesh"})); //this give empty array.because it is not able to convert keys to array.

//**convert keys to array**
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
