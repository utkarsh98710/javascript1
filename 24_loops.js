// for loop
//1)
// for (let i = 0; i <=10; i++) {
//     const element = i;
//     console.log(element);
//     if (element==5) {
//         console.log("5 is best number");
//     }
// }
// console.log(element);

//2)
// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner loop value ${j} ans inner loop ${i}`);     
//     console.log(i + '*' + j + ' = ' + i*j);   
//     }    
// }

//3)
// let myArray = ["flash","batman","superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

//keywords in iterator
// break and continue

//break use
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {  // we want as 5 number detect we not want to print 
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
// }

//continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {  // we want as 5 number detect we not want to print 
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
}
