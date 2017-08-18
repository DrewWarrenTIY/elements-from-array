"use strict";

var exampleArr = [];

function addToArray() {
  var thing = document.querySelector('.js-to-be-added').value;
  console.log("input value: ", thing);
  exampleArr.push(thing);
  console.log("exampleArr value: ", exampleArr);
  document.querySelector('.js-array-span').innerHTML = exampleArr;
}

function makeElements() {
  console.log(exampleArr);
}
