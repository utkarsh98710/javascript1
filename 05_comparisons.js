//comparison operator we get ans in bool value
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

// compare two differet datatypes
console.log("2">1);
console.log("02">1);

//note=> avoid this type of conversion

//null is empty value and null convert to zero
console.log(null>0); //false
console.log(null==0); //false comparison
console.log(null>=0); //true  equality check

//the reason is that an equality check == and comparisons ><> =
//<= work differently.
//comparisons convert null to a number, treating it as 0.
//thats why (3) null >=0 is true and (1), null>0 is false

//undefined it give false in all values
console.log(undefined ==0); //false
console.log(undefined >0); //false
console.log(undefined <0); //false

// === it is known as strictly check -> datatypes ko bhi check karta he
console.log("2" ===2 ); //not same because datatype alag he

