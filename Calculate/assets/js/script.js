"use strict";

let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let add=document.getElementById("add");
let substract=document.getElementById("substract");
let mult=document.getElementById("mult");
let divide=document.getElementById("divide");
let result=document.getElementById("result");

add.addEventListener("click",function(){
    if(num1.value=="" || num2.value==""){
        alert("Dont empty")
    }
    else{
        result.value=Number(num1.value)+Number(num2.value);
    }
    num1.value="";
    num2.value="";
   
})
substract.addEventListener("click",function(){
    if(num1.value=="" || num2.value==""){
        alert("Dont empty")
    }
    else{
        result.value=Number(num1.value)-Number(num2.value);
    }
    num1.value="";
    num2.value="";
   
})
mult.addEventListener("click",function(){
    if(num1.value=="" || num2.value==""){
        alert("Dont empty")
    }
    else{
        result.value=Number(num1.value)*Number(num2.value);
    }
    num1.value="";
    num2.value="";
   
})
divide.addEventListener("click",function(){
    if(num1.value=="" || num2.value==""){
        alert("Dont empty")
    }
    else{
        result.value=Number(num1.value)/Number(num2.value);
    }
    num1.value="";
    num2.value="";
   
})