
// const programming =["js","rb","py","java","cpp"]
// // In for in loop key will be print not value written inside 
// for (const key in programming) {
//        console.log(key); //op is  0 1 2 3 4 (array key print)
//     }


// for (const key in programming) {
//        console.log(programming[key]); // op is js rb py....
//     }

// // In for of loop value will be print
// for (const key of programming) {
//     console.log(key); // op is js rb py....
// }

// const map =new Map()
// map.set('IN',"India")
// map.set('IN',"India")// this will not print because map function use for unique value.
// map.set('USA',"United States os America")
// map.set('Fr',"France")

// // // console.log(map);
// // here we apply forIn loop on map 
// for (const key in map) { // not print anything
//     console.log(key);
//     }

// for each loop
const coding = ["js","ruby","java","python","cpp"]
// coding.forEach( function (item){// no need to write name because it is call back
//     console.log(item);
// } ) 

//new way to operate for each loop
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

//another new way to handle for each loop
// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach ((item,index,arr)=>{
//     console.log(item,index,arr);
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
    console.log(item.languageName);//acces of objects in array
})
   










