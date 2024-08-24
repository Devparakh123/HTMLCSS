// let arr1 = [10,20,30];
// let arr2 = arr1 ;
// arr.push(1000);

// console.log(arr1 === arr2);

// let num1 = 20 ;
// let num2 = num1 ;

// console.log(num2 === num1);
// spread operator
// let arr1 =[10,20,30];
// let arr2 = [...arr1];///...spread operator

// arr2.push(1000);
// console.log(arr1);
// console.log(arr2);

let obj =  {
        firstname: "harsh",
        lastname: "kawadia"
    }
let obj2 = {
     address: "udaipur",
        gender: "male"
}
let obj3 = {...obj, ...obj2, section : "fsssd"};
console.log(obj3);




