// DOM... D=Doccument O=Object  M= Model

console.log(window.document); // to catch whole HTML
console.log(window.document.head); // how to catch body and head
console.log(window.document.body);

console.log(document.links); // how to catch a tag means link ,,, It shows liks node list not array

console.log(document.links[1]); // how to catch i no indext or nodelist in DOM

console.log(document.links[2].innerText); // how to show Inner text on no 2 index

console.log(document.forms); // how to catch forms

console.log(document.forms[0].children);

console.log(document.forms[0].children[2]); // how to catch children

console.log(document.forms[0].children[2].getAttribute("type")); // ki doronet data ase

console.log(document.forms[0].children[2].getAttributeNames()); // Function() Ki ase

console.log(document.getElementsByTagName("a")); // get by calling name

console.log(document.getElementsByTagName("h1")[0]);

console.log(document.getElementsByTagName("h1")[0].children[1]);

console.log(document.getElementsByTagName("div")); // how to catch div
console.log(document.getElementsByClassName("firstDiv")); // call div by Class name
console.log(document.getElementById("first")); // call by div  by id Name

// another way to call class and id:

const id = document.getElementById("first");
console.log("Id name of div is:", id);

const classExample = document.getElementsByClassName("firstDiv");
console.log("Class name of div is:", classExample);

// call by common ways

/* let alltag = document.querySelector("#first"); // id hole # claa hole . and Tag hole only a like CSS
console.log(alltag); */

// if we use quqryselectior alll then it will show in node list

let alltag = document.querySelectorAll("div");
console.log(alltag); // node list a sob dibe.

// DOM moifiey  HTML text  and specify class name

/* const h1 = document.querySelector(".H1");
h1.innerText = "Maria Mehbin";
 */

// Now Add style using DOM not in CSS

/* const h1 = document.querySelector("H1");
h1.innerText = "Maria Mehbin";
h1.classList.add("Zahidul");
h1.style.backgroundColor = "red";
console.log(h1);

// reomove the HTML class
h1.classList.remove("Zahidul"); */

// now i will add ID

/* const h1 = document.querySelector(".H1");
h1.setAttribute("id", "Ayra");
//h1.style.color = "blue";   // here we give color to tag not in id if in ID then use CSS

h1.setAttribute("style", "color:red"); // other way to give color to tag
h1.removeAttribute("style"); // how to remove style in HTML
console.log(h1);
 */

// we will make tag H1 in HTML

/* const body = document.body; // now we add h1 in body
const h1 = document.createElement("h1"); // creat h1 in console
h1.innerText = "Zahidul Hoqoue Molla and  Ayra Mehbin";

body.appendChild(h1); // now we add h1 in Body
console.log(h1); */
