// let promise = new Promise((resolve , reject ) => {
//     console.log("I AN THE PROMISE")
//     // resolve("suces")
//     reject("party")
// });

// function  getData(dataid , getnextdata){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataid);
//             resolve("sucess");
//             if(getnextdata){
//                 getnextdata();
//             }

//         }, 2000);
//     });
// }
// const getpromise = () => {
//      return new Promise((resolve , reject ) => {
//         console.log("I AN THE PROMISE");
//         resolve("suces");
//         reject("party")
//     });
// };

// let promise = getpromise();

// promise.then ((res) => {
//     console.log("promise fullfilled",res);
// });
// promise.catch((err) => {
//     console.log("rejected" ,err);
// });

function asyncfunction1(){
return new Promise((resolve , reject)=>{
    setTimeout(()=>{
        console.log("some data 1");
        resolve("sucess");
    },4000);
});
}
function asyncfunction2(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("some data 2");
            resolve("sucess");
        },4000);
    });
}
 console.log("fetching datA ONE")
    let p1 = asyncfunction1();
    p1.then((res)=>{
        console.log(res);
        console.log("fetching data tw0............");
        let p2 = asyncfunction2();
        p2.then((res)=>{
            console.log(res);
        });


    });
