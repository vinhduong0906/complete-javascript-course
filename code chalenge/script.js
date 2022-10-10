"use strict";

const imageContainer = document.querySelector(".images");
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C__"],
  answers: new Array(4).fill(0),
};
// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";
//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();
let a = [];
a.unshift(1);
a.unshift(22);
a.shift();
a.unshift(3, [4, 5]);
a.shift();
a.shift();
console.log(a.shift());
