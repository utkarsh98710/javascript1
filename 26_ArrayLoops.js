// for of loop
//[{},{},{}] objects in array
//["","",""]

// on array (for-of loop is aplicable)
// on object (for-in loop is applicalble)

// const arr = [1,2,3,4,5]
// // for-of loop written below

// for (const num of arr) {// here object mean kiske upar loop lagana he , here object mean arr jiske upar loop lagana he 
//     console.log(num);
// }

//1) for-of loop on strings

const greetings = "Hello world!"
for (const num of greetings) {
    // console.log(`Each char is ${num}`);
}

//Maps (objects that hold key value pair and remembers the original insertion order of the keys)

const map =new Map()
map.set('IN',"India")
map.set('IN',"India")// this will not print because map function use for unique value.
map.set('USA',"United States os America")
map.set('Fr',"France")
// console.log(map);

// // how to apply loop on map function
for (const key of map) { // this will print all map value as it is in array form
    // console.log(key);
}

// // if we want to print map value separately this is how we write.
for (const [key,value] of map){ 
    // console.log(key, ':-',value);
}

const myObj= {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// for (const [key, value] of myObj) { // myObj is not iterable by normal way 
//     // console.log(key, ':-',value);
// }


// myObj is iterable this way (forin- loop)
const myObject ={
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}
// for in loop is used to access objects in js
for (const key in myObject) {
        console.log(`${key} shortcut is for ${myObject[key]}`);
        // console.log(`${myObject[key]}`); // this mean jo myObject me key ki value he use print kar do     
    }

   
