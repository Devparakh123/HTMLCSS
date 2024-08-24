// let mydiv = document.getElementById("main");

// mydiv.id = "container";
// mydiv.className = "head";
// mydiv.style.width = "200px";
// mydiv.style.height = "200px";
// mydiv.style.background = "green";
// mydiv.style.borderRadius = "20px";


// console.log(mydiv.getAttribute("id"));
// console.log(mydiv.getAttribute("class"));
// console.log(mydiv.getAttribute("style"));
// mydiv.setAttribute("id", "text");

// mydiv.setAttribute("style", "background-color:red");

// let obj = {
//     id : "main",
//     style : {
//         width :'200px' ,
//         height :'200px' ,
//         backgroundcolor : "green"
//     }

// }
// obj.id = "container";
// obj.style.borderRadius = "20px";


// console.log(mydiv.innerHTML);
// console.log(mydiv.textContent);
// mydiv.innerHTML = "<input type='button' value='alpha'>"

let myDiv = document.getElementsByClassName("head")
console.log(myDiv)
let colorArr = ["red","green","blue","yellow","brown","pink",]
for(let i =0;i<myDiv.length;i++){
    myDiv[i].style.padding = "20px";
    myDiv[i].style.margin = "20px";
    myDiv[i].style.backgroundColor = colorArr[i];
}
let newdiv = document.createElement("div");
console.log(newdiv)
newdiv.style.background ="black";
newdiv.style.height = "200px";
newdiv.style.width = "500px";
document.body.appendChild(newdiv);