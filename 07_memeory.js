//stack (use in primitive datatypes)
//if we define a variable in stack 
//we get a copy of this variable.

//heap(non-primitive)
// if we define a variable in heap we get referance of original value 
//(change original value me hoga)..


//Interisting Concept see this memory allocation concept
let myInstagramName = "Utkarsh_gupta340"
let anothername = myInstagramName

anothername ="Harsh Gupta"
console.log(myInstagramName);
console.log(anothername);

let user1={ //heap example
    email:"user@google.com",
    upi:"ybi@ybl"
}

let user2=user1 //reference from user1

//by using dot(.) we acces all value in object
user2.email="utkarsh@gmail.com"

console.log(user1.email);
console.log(user2.email);
