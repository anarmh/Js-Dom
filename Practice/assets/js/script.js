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

// let spans = document.querySelectorAll("#product span");

// console.log(spans);
// for (const item of spans) {
//   if (item.innerText == "Salam3") 
//     item.style.color = "red";

// }

// let elem=document.querySelector("h2");
// elem.innerText="Welcome";
// console.log(elem);
// console.log(elem.innerHTML);

// elem.innerHTML="<span>Salam</span>"
// console.log(elem);
// elem.style.backgroundColor="green";
// elem.style.position="relative";
// elem.style.top="300px"

// let h1=document.querySelector("h1");

// h1.className="test";
// console.log(h1);

// h1.classList.add("test")
// h1.classList.remove("test")

// h1.classList.contains("header");
// console.log(h1);


// let button = document.querySelector("#products button");

// let h1 = document.querySelector("#products h1")
// console.log(button);

// button.onclick=function(){
//     h1.style.color="red";
// }
// button.onclick=function(){
//     h1.style.color="magenta";
// }

// button.addEventListener("click",function(){
//     alert("salam1")
// })


// function test(){
//     alert("test function")
// }

// button.addEventListener("click",test

// )

// button.addEventListener("click", function () {
//     // h1.className = "h1-design";

//     h1.classList.add("h1-design");


// })


let btnon = document.querySelector("#products .on");
let btnoff = document.querySelector("#products .off");
let h1 = document.querySelector("#products h1");
let icon = document.querySelector("#products .box .icon i")
let body = document.querySelector(".body-active");

// btnon.addEventListener("click", function () {

//     if(h1.classList.contains("inActive")){
//         h1.classList.remove("inActive")
//     }
//     h1.classList.add("active")
// })
// btnoff.addEventListener("click", function () {

//     if(h1.classList.contains("active")){
//         h1.classList.remove("active")
//     }
//     h1.classList.add("inActive")
// })

// btnon.addEventListener("click",function(event){

//     if(icon.classList.contains("active")&& body.classList.contains("body-active")){
//         icon.classList.remove("active");
//         body.classList.remove("body-active");
//         event.target.innerText="on"
//         event.target.classList.remove("btn-danger")
//         event.target.classList.add("btn-success")
//     }
//     else{
//         icon.classList.add("active");
//         body.classList.add("body-active");
//         event.target.innerText="off"
//         event.target.classList.remove("btn-success")
//         event.target.classList.add("btn-danger")
//     }

// })

// btnoff.addEventListener("click",function(){
//     icon.classList.remove("active");
//     body.classList.remove("body-active");
// })

// document.querySelector("a").addEventListener("click",function(e){
//     e.preventDefault();
//     console.log("Anar");
// })

// icon.addEventListener("mouseover",function(){
//     icon.classList.add("active");
//     body.classList.add("body-active");
// })

// icon.addEventListener("mouseout",function(){
//     icon.classList.remove("active");
//     body.classList.remove("body-active");
// })

let input = document.querySelector("#products input");
let button = document.querySelector("#products button");
let ul = document.querySelector("#products ul")

// <!-- <li class="list-group-item my-1">Salam</li> -->
// button.addEventListener("click",function(){
//     console.log(input.value);
//     input.value=""
// })
button.addEventListener("click", function () {
    let inputValue = input.value;
    // if(!!!inputValue){
    //     alert("Dont empty")
    //     return
    // }
    if (inputValue == "") {
        alert("Dont empty")
        return
    }


    let list = document.querySelectorAll("li");

    for (const item of list) {
        if (item.innerText == inputValue) {
            alert("item already exist")
            input.value = "";
            return
        }
    }
    let li = document.createElement("li");
    li.className = "list-group-item my-1";

    // console.log(li)

    li.innerText = inputValue;

    ul.append(li);


    
    // ul.innerHTML += `<li class="list-group-item my-1">${inputValue}</li>`;

    input.value = "";
})

