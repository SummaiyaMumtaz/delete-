// // var obj = {

// // const { text } = require("express");

// // name: "alish",
// // age: 10,
// // inst: "duhs",

// // };
// // delete obj.age;
// // var ab = "inst" in obj;
// // console.log(ab);

// //functionone

// // function abc(name, age , inst) {
// //     var obj = {
// //         name : name,
// //         age: age,
// //         inst: inst,
// //     };
// //     console.log(obj);
// // }

// // abc("ali",12, "duhs");
// // abc("sana", 34, "duhs");

// //function with return
// // function abc(name, age , inst) {
// //     let obj = {
// //         name : name,
// //         age: age,
// //         inst: inst,
// //     };
// //     console.log(obj);
// //     return obj;
// // }

// // var std = abc("ali",12, "duhs");
// // console.log(std);

// // constructor function

// // function CreateStudent(name,age,inst) {
// //     this.name = name;
// //     this.age = age;
// //     this.inst = inst;
// // }

// // var std1 = new CreateStudent("ali", 18, "saims");
// // console.log(std1);
// // console.log(std1.name);

// //todo app

// // var input1 = document.getElementById(input1);
// // var get = document.getElementById(get);
// // console.log(input1);
// // var time = new Date();

// var list = [];

// var input1 = document.getElementById("input1");
// var parent = document.getElementById("get");
// // var delete = document.getElementById("delete");

// //creating delete button:

// function dleteALL(){
//   parent.innerHTML=""

// }

// //
// function del(){
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//  close[i].onclick = function() {
//    var div = this.parentElement;
//    div.style.display = "none";
//  }
//  }
// }

// function renderList() {
//     parent.innerHTML = "";
//   for (let i = 0; i < list.length; i++) {
//     parent.innerHTML += `<div> 
//     <p> ${list[i].text}</p>
//     <span> ${list[i].time}</span>
//     `;
//     del();
//   }
// }

// function getData() {
//   var obj = {
//     text: input1.value,
//     time: new Date().getHours() + ":" + new Date().getMinutes(),
//   };
//   list.push(obj);
//   renderList();
// }



var list=[];
var inp=document.getElementById("inp")
var parent=document.getElementById("parent")

function renderList(){
    parent.innerHTML="";
    for(var i=0;i<list.length;i++){
        parent.innerHTML+=`<div>
        <p> ${list[i].text}</p>
        <span>${list[i].time}</span>
        </div>`;
    }
}

function add(){
    var obj={
      
        text: inp.value,
        time: new Date().getHours()+" : "+new Date().getMinutes(),

    };
    list.push(obj);
    
    renderList();
    del();
    // inp.innerHTML=""
   
}

function deleteall(){
   parent.innerHTML=""

}


function del(){
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
  }
}