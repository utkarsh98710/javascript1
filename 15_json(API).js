////Object de-structure and json api intro
const course={
    coursename:"Javascript in hindi",
    price:"999",
    courseInstructor:"utkarsh"
}
//course.courseInstructor //this is also correct but not good syntax we have to write 3 time if we want to print

const {courseInstructor} = course
console.log(courseInstructor);

// If we want to rename courseInstructor
const {courseInstructor:instructor} = course
console.log(instructor);

//Ojects (de-structuring)
const navbar = ((company)) //=> {

//}
navbar(company = "utkarsh")

//API's value is in json form 
//keys ki value bhi string hoti he

//json format.
// {
//     "name";"utkarsh",
//     "coursename":"javascript",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {}
// ]

//tools for understanding json (api)=> json formatter

