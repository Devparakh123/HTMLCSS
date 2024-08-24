// document.getElementById("button").onclick = function(){
//    let newdiv = document.createElement("div");
//    newdiv.style.height = "200px";
//    newdiv.style.width = "200px";
//    newdiv.style.backgroundColor = "green";
//    document.body.appendChild(newdiv);
// }
document.getElementById("button").addEventListener("click", function(){
    let newdiv = document.createElement("div");
    newdiv.style.height = "200px";
    newdiv.style.width = "200px";
    newdiv.style.backgroundColor = "green";
    document.body.appendChild(newdiv);
});

