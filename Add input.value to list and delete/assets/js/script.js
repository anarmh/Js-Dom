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

// function appendDeleteBtnTo(element) {
//     let i = document.createElement("i");
//     i.className = "fa-regular fa-trash-can delete";
//     element.appendChild(i);
//   }

// function addItem() {
//     // Kullanıcının girdisi alınıyor
//     let input = document.getElementById("new-item").value;
    
//     // Girdi yoksa veya boşsa listeye eklenmiyor
//     if (input === "") {
//       return;
//     }
  
//     // Yeni bir liste öğesi oluşturuluyor
//     let li = document.createElement("li");
//     li.textContent = input;
  
//     // Silme ikonu oluşturuluyor
//     let icon = document.createElement("i");
//     icon.classList.add("", "");
//     icon.onclick = function() { // Silme işlevi tanımlanıyor
//       this.parentElement.remove();
//     };
  
//     // Silme ikonu liste öğesine ekleniyor
//     li.appendChild(icon);
  
//     // Yeni liste öğesi listeye ekleniyor
//     let ul = document.getElementById("list");
//     ul.appendChild(li);
  
//     // Girdi kutusu temizleniyor
//     document.getElementById("new-item").value = "";
//   }
  