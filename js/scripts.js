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
  exampleArr.forEach(function (c,i,a) {
    console.log(makeButton(c));
    var newButton = document.createElement("button");
    document.querySelector('.js-element-container').appendChild(newButton);
    newButton.outerHTML = makeButton(c);
  });
}

var btnTemplate = document.querySelector('.js-element-template').outerHTML;
console.log("btnTemplate: ", btnTemplate);

document.querySelector('.js-element-template').className = "js-element-template dap-hide";

function makeButton(text) {
  return '<button class="js-element-template" type="button">' + text + '</button>'
}
