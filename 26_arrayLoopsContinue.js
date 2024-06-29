// for in loop on array
const programming =["js","rb","py","java","cpp"]
// In for in loop key will be print not value written inside 
for (const key in programming) {
    //    console.log(key); //op is  0 1 2 3 4 (array key print)
    }

// to print value of array by for in loop console.log(programming[key]) this type is written.
for (const key in programming) {
    //    console.log(programming[key]); // op is js rb py....
    }

// // In for of loop value will be print
// for (const key of programming) {
//     console.log(key); // op is js rb py....
// }

// for-in loop is notpossible on map.. map is not iterable
const map =new Map()
map.set('IN',"India")
map.set('IN',"India")// this will not print because map function use for unique value.
map.set('USA',"United States os America")
map.set('Fr',"France")

// // console.log(map);
// here we apply forIn loop on map 
for (const key in map) { // not print anything
    console.log(key);
    }

// for each loop
const coding = ["js","ruby","java","python","cpp"]
// coding.forEach( function (item){// no need to write name because it is call back
//     console.log(item);
// } ) 


// for each by arrow function
coding.forEach( (item)=>{
    // console.log(item);
})

//new way to operate for each loop
function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)

//another new way to handle for each loop
coding.forEach(function (val){
    // console.log(val);
})

// coding.forEach ((item,index,arr)=>{
//     console.log(item,index,arr);  // this will print three things supose we see one value 1 print first 
//     //value of coding array and its index and lastly arr print whole coding array
// })


// Objects in array
const myCoding =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]
// we use for-each loop on objects in array
myCoding.forEach( (item) => {
    console.log(item.languageFileName);//acces of objects in array
})
   










