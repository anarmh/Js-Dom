"use strict";

// console.log(document);
// let show=console.log.bind(console);
// show(document);

// let elems=document.getElementsByTagName("h1");
// console.log(elems[0]);
// for (const elem of elems) {
//     console.log(elem);
// }

// let elem=document.getElementsByClassName("header")
// console.log(elem);

// let elem=document.getElementById("product");
// console.log(elem);

// let span=document.querySelector("#product .item p");
// console.log(span);

// let thirdspan=document.querySelector("#product span:nth-child(3)");
// console.log(thirdspan);

let spans = document.querySelectorAll("#product span");

// console.log(spans);
for (const item of spans) {
  if (item.innerText == "Salam3") 
    item.style.color = "red";
  
}
