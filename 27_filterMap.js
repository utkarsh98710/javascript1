// const coding =["js","ruby","java","python","cpp"]
// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })
// console.log(values);

//filter function
// const myNums = [1,2,3,4,5,6,7,8,9,10]
//                                  //below is arrow function
// const newNums  = myNums.filter( (num) => num >4)// give some condition in filter function and check that condition
// console.log(newNums);

// give output [] .. curly braces scope start return keyword is must to return
const myNums1 = [1,2,3,4,5,6,7,8,9,10]
//   newNums ke andar values store kar rahe he  //below is arrow function

//filter method 
// const newNums  = myNums.filter( (num) =>{
//    return num >4 // if we not write written it will print []
// })

//new way
// const newNums= []
// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

// const books=[
//     { title: 'Book One',genre: 'fiction',publish:1981, edition:2004},
//     { title: 'Book Two',genre: 'Non-fiction',publish:1992, edition:2008},
//     { title: 'Book three',genre: 'history',publish:1999, edition:2007},
//     { title: 'Book four',genre: 'Non-fiction',publish:1989, edition:2010},
//     { title: 'Book five',genre: 'science',publish:2009, edition:2014},
//     { title: 'Book six',genre: 'fiction',publish:1987, edition:2010},
//     { title: 'Book seven',genre: 'history',publish:1986, edition:2014},
//     { title: 'Book eight',genre: 'science',publish:1988, edition:2009}
// ];

// // let userBooks= books.filter( (bk) =>bk.genre ==='history' )

// // some more condition
// userBooks = books.filter( (bk) => {
//     return bk.publish >= 2000 &&bk.genre==="science"
// }) //here we declare scope { } so we have to put return keyword.
// console.log(userBooks);


// we want to add 10 to each elements of array, this works is also be done by foreach loop
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers.map( (num) =>num+10 )
// console.log(newNums);

// chaining method=> the first result of chaining will pass to next method.
// const newNums = myNumbers
//                 .map((num) => num *10 )
//                 .map( (num) => num+1)
//                 .filter( (num) => num >= 40) // in filter function we have to given some condition 
// console.log(newNums);

// Reduce method with more readability
const myNums=[1,2,3,4,5]
// acc=> accmulator
// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)// here we give acc value from where we want to start the value of acc.
// console.log(myTotal);

// above by arrow function
const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price:999,

        itemName: "DSA",
        price:3999,

        itemName: "web dev",
        price:4999,

        itemName: "app dev",
        price:1599
    }
]
//item denote every elements price in array and find price
const priceTopay=shoppingCart.reduce( (acc,item) => acc+item.price,0)
console.log(priceTopay);