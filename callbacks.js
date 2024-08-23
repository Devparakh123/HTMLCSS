// function hello() {
//     console.log("hello");
// }
// setTimeout(hello, 1000);//given in ms 

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallBack){
//     sumCallBack(a,b);
// }
// calculator(1,2,sum);
// function getData(dataid, getnextdata) {
//     setTimeout(() => {
//         console.log("data", dataid);
//         if (getnextdata) {
//             getnextdata();
//         }
//     }, 4000);
// }

// getData(1, () => {
//     getData(2, () => {

//         getData(3);

//     })
// }

// );

let arr = [10,23,30,40,50,60];
// let filteredarr = arr.filter((item)=> item>30);
// console.log(filteredarr);

// let sum = arr.reduce((acc,curr)=>{
   
//    return  acc+curr ;
// } ,1000 );
// console.log(sum);
// acc  curr  sum 

// 0  10      10

// 10 20      30
// 30 30      60
// 60 40     100
//100 50      150
// 150  60     210

// let founditem = arr.find((item)=>item>20);
//  console.log(founditem);

// let founditem = arr.findIndex((item)=>item>20);
//  console.log(founditem);

// let founditem = arr.some((item)=>item%2 === 0);
//  console.log(founditem);

// let founditem = arr.every((item)=>item%2 === 0);
//  console.log(founditem);


let obj = {
    firstname : "dev",
   lastname : "parakh"

}
// let key = Object.keys(obj);
// console.log(key);
// let key = Object.entries(obj);
// console.log(key);
// Object.freeze(obj);
// console.log(obj);

// obj.address = "jaipur";
// console.log(obj);
// Object.seal(obj);
// obj.firstname = "ff";
// console.log(obj);

let str = "hello world";
// let hasworld = str.includes("world");
// console.log(hasworld);

//  let index = str.indexOf("or");
//  let index1 = str.lastIndexOf("r");
//  console.log(index1);

// let substr = str.substring(4,8);
// console.log(substr);


// let substr = str.trim();
// console.log(substr);
// let substr = str.split("");
// console.log(substr);

// let substr = str.replace("world", "dev");
// console.log(substr);

// let substr = str.repeat(2);
// console.log(substr);

// let num = Math.random();
// console.log(num);

// let num =10.54;
// console.log(Math.floor(num));console.log(Math.round(num));


let otp = Math.floor( 1000 + Math.random()*9000);
console.log(otp);