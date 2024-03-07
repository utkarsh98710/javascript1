function one(){
    const username = "Utkarsh" 

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website); not accesble
    
     two()
}
// one()


if(true){
    const username="Utkarsh"
    if(username=="Utkarsh"){
        const website = " youtube"
        // console.log(username + website); print some value;
    }
    // console.log(website); not accesible
}
// console.log(username); not accesible

//++++++++++++++++++++++++++++++++++++INTERISTING++++++++++++++++++++++++++++++++


//1
console.log(addone(5)) // 
function addone(num){
    return num+1
}
addone(2) //isse bss return hota print nahi hota


//
// addTwo(5) //this give error two. declariation se pehle acces kar rahe he . 
const addTwo = function(num){ // this is function two ..yaha variable dene ke sath variable me hold bhi kar dia he
    return num+2
}
