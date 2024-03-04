// declare a object by (singleton object)
const tinderUser = new Object()
console.log(tinderUser); //it give empty object

//another way to declare a object (non - singleton object)
const tinderUser1 = {}
tinderUser1.id = "123abc"
tinderUser1.name ="Utkarsh"
tinderUser1.isLoggedIn = false
console.log(tinderUser1); 

//nested object
const regularUser = {
    email:"utkarshgupta@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Utkarsh",
            lastname:"Gupta"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

// ***How to combine/merge to objects
const obj1 = { 1: "a",2:"b"}
const obj2 ={ 3:"a",4:"b"}
const obj4 ={5:"a",6:"b"}

//assign a object
//  (method-1)
//const obj4 = { obj1,obj2}

//(method-2)
// const obj3 = Object.assign({},obj1,obj2,obj4) //empty object is given

// **** (easy) (method-3) use spread object to assign a object

const obj3={...obj1, ...obj2}
console.log(obj3);

//when a database is given print some value.
const users =[
    {
        id: 1,
        email: "utkarsh@gmail.com"
    },
    {
        id: 1,
        email: "utkarsh@gmail.com"
    },
    {
        id: 1,
        email: "utkarsh@gmail.com"
    }
]
//print some value. 
users[1].email
console.log(users);

// we acces object (keys) and object value..
console.log(tinderUser1);
console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1)); //nested array first array is key and other array is value.

console.log(tinderUser1.hasOwnProperty('isLoggedIn')); // check property available or not.

