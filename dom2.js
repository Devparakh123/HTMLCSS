// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name)
// let p = document.querySelector("P");
// console.log (p.getAttribute("class"));
// console.log (p.setAttribute("class", "newclass"));
// let div = document.querySelector("div");
// console.log(div.style);
// div.style.backgroundColor = "black";
// div.style.fontSize = "26px";
// div.style.visibility = "hidden";
// div.innerText ="hello";
// let newbutton = document.createElement("button");
// newbutton.innerText ="click me!";
// console.log(newbutton);
// let div = document.querySelector("div");
// div.append(newbutton);
// div.prepend(newbutton);
// div.before(newbutton);
// div.after(newbutton);
// div.append(newbutton);
// let h1 = document.createElement("h1");
// h1.innerHTML = "<I>HI  I AM NEW !</I>" ;

// document.querySelector("body").prepend(h1);
// newbutton.remove();
// let dd = document.querySelector("#dd");
// dd.onclick = ()=>{
//     console.log("BTN1 was clicked");
//     let a = 25 ;
//     a++ ;
//     console.log(a);
//      alert("hello techno");
// }
// let de = document.querySelector("#de");
// de.ondblclick = ()=>{
//     console.log("party");
//     alert("hello techno");
//  }
// console.log("hello guys");
// differnce between var let const ??
// Feature	var	let	const
// Scope	Function-scoped	Block-scoped	within the file
// Hoisting	Hoisted (initialized as undefined)	Hoisted (not initialized or null)	Hoisted (not initialized or null)
// Redeclaration	Allowed within the same scope	Not allowed within the same block	Not allowed within the same block
// Reassignment	Allowed	Allowed	Not allowed
// Immutability	Mutable	Mutable	Immutable (but objects/arrays can be mutated)
// primtive types - string , number, boolen ,undefined, symbol  ,bigint 
//refrence or object type data types --array , objects , date , null
// var df  = "i'am the god";

// var df = 1;
// for (let index = 0; index < 5; index++) {
   
//     console.log(`${df}`) ;
//     df++;
// }
// {{},{},{}}
//  var dev = 1 ;
// var dev = 5 ;
// console.log(dev);
//variable defined with the var can be redeclared
// let dd = 1 ;
// dd= 2 ;
// console.log(dd);

//variable defined with let cannot be redeclared but can be resign 
// const num3 = 100 ;
// num3 = 1000 ;
// console.log(num3);
//variable defined with const cannot be redeclared or resign


// arthmatic opertors 
let btn = document.querySelector("#de");
btn.addEventListener("click" , (evt) =>{
   console.log("button was clicked");
  console.log(evt);
  console.log(evt.type);
  
});
btn.addEventListener("click" , () =>{
    console.log("button was clicked all handelr");
 
 });
 