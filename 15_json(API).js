// //Object de-structure and json api intro
// // const tinderUser = new Object()
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "utkarsh",
//             lastname: "gupta"
//         }
//     }
// }

// // console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "utkarsh@gmailcom"
//     },
//     {
//         id: 1,
//         email: "utkarsh@gmailcom"
//     },
//     {
//         id: 1,
//         email: "utkarsh@gmailcom"
//     }
// ]

// users[1].email
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "utkarsh"
// }

// // course.courseInstructor

// const {courseInstructor: instructor} = course

// // console.log(courseInstructor);
// console.log(instructor);

// // {
// //     "name": "utkarsh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]

////Object de-structure and json api intro
const course={
    coursename:"Javascript in hindi",
    price:"999",
    courseInstructor:"utkarsh"
}
//course.courseInstructor //this is also correct but not good syntax we have to write 3 time if we want to print

const {courseInstructor} = course
console.log(courseInstructor);

// of we want to rename courseInstructor
const {courseInstructor:instructor} = course
console.log(instructor);