//1
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");


let fn = firstName + " " + lastName;

console.log("Full Name: " + fn);


//2
let alpha = prompt("Enter a alpha:");


alpha = Number(alpha);


if (alpha > 0) {
    console.log("Positive");
} else if (alpha < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

////3
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//4
function all(name) {
    console.log("Hello, " + name + "!");
}


all("All");



//5
let num = [10, 20, 30, 40, 50];


let s = 0;


for (let i = 0; i < num.length; i++) {
    s += num[i];
}


console.log("The s of the num is: " + s);
