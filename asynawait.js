//  async function helloo(){
//     console.log("HELLO");

// }
function api(dataid){
    return new Promise((resolve ,reject) =>{
        setTimeout(() =>{
            console.log("wheather data" ,dataid);
        resolve(200);
        },4000);
    });
}

 async function  getwheatherdata(){
    await api(1);
    await api(2);
 }

 