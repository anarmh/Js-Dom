"use strict";


let input = document.querySelector("#products input");
let button = document.querySelector("#products button");
let ul = document.querySelector("#products ul")



button.addEventListener("click", function () {
    let inputValue = input.value;
    
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

    li.innerText = inputValue;

    ul.append(li);


    let i = document.createElement("i");
    i.className = "fa-regular fa-trash-can delete";
    li.append(i)
    

    input.value = "";
})

// function appendDeleteBtnTo(element) {
//     let i = document.createElement("i");
//     i.className = "fa-regular fa-trash-can delete";
//     element.appendChild(i);
//   }
