// let date = new Date();

// console.log(typeof date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.toDateString());
// console.log(date.getDate());
// console.log(date.toTimeString());
// console.log(date.toLocaleDateString());

let arr = [10,20,30,40,50,60];
let arr1 =  [10];
let [first, ...newarr] = arr ; // ...rest operator
console.log(first,...newarr);
let [num , num2=100] = arr1 ;
console.log(num , num2);
// object destructing 
let obj  = {
    firstname: "dev",
    lastname : "parakh"
}
let {firstname} = obj ;
console.log(firstname);
let obj1 = {};
obj.firstname = "vinay"
console.log(obj);

// let obj =  {
//     firstname: "harsh",
//     lastname: "kawadia",
//     address: "udaipur",
//     gender: "male"
// }
// let {firstname} = obj;

// console.log(firstname);

// let obj1 = {};
// obj1[firstname] = "xyz"
//  console.log(obj1)

// let obj =  {
//     firstname: "harsh",
//     lastname: "kawadia",
//     address: "udaipur",
//     gender: "male"
// }
// let {firstname , address} = obj;

// console.log(firstname);

// let obj1 = {};
// obj1[firstname] ="xyz"
// obj1[address] ="abc"
// console.log(obj1)
