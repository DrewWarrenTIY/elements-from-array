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

var exampleObj = {
  "network-id":"093B",
  "endpoint":"01",
  "euid64":"000D6F000B2E5846",
  "in-clusters":["Basic","Identify","Groups","Scenes","On/Off","Electricity Measurement","Diagnostics","FC03[Unknown/Non-Standard]"],
  "out-clusters":["OTA Update (Non HA/ZCL)"],
  "profile":"Home Automation (HA)",
  "name": "Iris Plug One",
  "device": "Yale Lock",
  "type": "binaryswitches"
}

console.log("exampleObj: ", exampleObj);

function makeFirstDiv(divId, cssClass) {
  return '<div id="' + divId + '" class="dap-control-element dap-toggle-' + cssClass + '"> </div>';
}

function makeSecondDiv() {
  return '<div class="dap-box"> </div>';
}

function makeFirstP(text) {
  return '<p class="dap-title">' + text + '</p>';
}

function makeThirdDiv() {
  return '<div class="div-three"> </div>';
}

function makeSecondP(text) {
  return '<p class="dap-box-text">' + text + '</p>';
}

function makeFirstI(text) {
  return '<i class="fa fa-' + text + ' fa-3x" aria-hidden="true"></i>';
}

function elementFromObj(obj, number) {
  if(obj.device === "Iris Plug") {
    var divId = "lightBtn-" + number;
    var cssClass = "iris-plug";
    var fontAwesomeClass = "lightbulb-o";
    var secondPText = "Off";
  }
  if(obj.device === "Leviton Plug") {
    var divId = "lampBtn-" + number;
    var cssClass = "leviton-plug";
    var fontAwesomeClass = "lightbulb-o";
    var secondPText = "Off";
  }
  if(obj.device === "Yale Lock") {
    var divId = "doorBtn-" + number;
    var cssClass = "yale-lock";
    var fontAwesomeClass = "lock";
    var secondPText = "Unlocked";
  }
  console.log("makeFirstDiv: ", makeFirstDiv(divId, cssClass));

  var firstDiv = document.createElement("div");
  document.querySelector('.obj-element-container').appendChild(firstDiv);
  firstDiv.outerHTML = makeFirstDiv(divId, cssClass);

  var secondDiv = document.createElement("div");
  document.querySelector('.dap-toggle-' + cssClass).appendChild(secondDiv);
  secondDiv.outerHTML = makeSecondDiv();

  var firstP = document.createElement("p");
  document.querySelector('.dap-toggle-' + cssClass).appendChild(firstP);
  firstP.outerHTML = makeFirstP(obj.name);

  var thirdDiv = document.createElement("div");
  document.querySelector('.dap-box').appendChild(thirdDiv);
  thirdDiv.outerHTML = makeThirdDiv();

  var secondP = document.createElement("p");
  document.querySelector('.dap-box').appendChild(secondP);
  secondP.outerHTML = makeSecondP(secondPText);

  var firstI = document.createElement("i");
  document.querySelector(".div-three").appendChild(firstI);
  firstI.outerHTML = makeFirstI(fontAwesomeClass);

}

elementFromObj(exampleObj, 1);
// <div id="lightBtn" class="dap-control-element dap-toggle-iris-plug hidden">
//           <div class="dap-box">
//             <div><i class="fa fa-lightbulb-o fa-3x" aria-hidden="true"></i></div>
//             <p class="dap-box-text">75%</p>
//           </div>
//           <p class="dap-title">Iris Plug One</p>
//         </div>
