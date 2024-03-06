//rest operator and spread operator symbol(...)
//rest operator and print all variables. otherwise it give only one variables.  
function calculateCartPrice(...num1){ // use to handle that condition where we give multiple variables.
    return num1
}
console.log(calculateCartPrice(200,400,500))//here we give many variables.but we require only 1 variables.

// function calculateCartPrice(val1,val2, ...num2){ //(val1=200,val2=400) num2 me bss 500 hoga will only print 500 the value of 200,400 contains.
//     return num2
// }
// console.log(calculateCartPrice(200,400,500))//here we give many variables.but we require only 1 variables.

//***How to pass objects in functions. (objects)***
const user={
    username: "Utkarsh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
//replace name and price in functions.
handleObject({
    username: "sam",
    price:399
})

//***************************************************** */

//make array.
const myNewArray= [200,400,100,600]
// define a function which accept array and print second element. 
function returnSecondvalue(getArray){
    //here (retrun type me) mynewArray nahi lenge kyuki vo ek particular name he. hum generic name lenge. 
    //hamare paas argument aara he hume uski second value print karni he.
    return getArray[1]
}
console.log(returnSecondvalue(myNewArray));// variable me array paas karo ya array ka name paas karo.
console.log(returnSecondvalue([200,400,100,600]));