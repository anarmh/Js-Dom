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


    let icon = document.createElement("i");
    icon.className = "fas fa-times delete";
    icon.onclick= function() { 
        this.parentElement.remove()};
    li.appendChild(icon)
    

    input.value = "";
})

