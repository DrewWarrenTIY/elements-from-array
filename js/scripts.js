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

var exampleObjArray = [{
  "network-id":"093B",
  "endpoint":"01",
  "euid64":"000D6F000B2E5846",
  "in-clusters":["Basic","Identify","Groups","Scenes","On/Off","Electricity Measurement","Diagnostics","FC03[Unknown/Non-Standard]"],
  "out-clusters":["OTA Update (Non HA/ZCL)"],
  "profile":"Home Automation (HA)",
  "name": "Iris Plug One",
  "device": "Iris Plug",
  "type": "binaryswitches"
}, {
  "network-id":"093B",
  "endpoint":"01",
  "euid64":"000D6F000B2E5846",
  "in-clusters":["Basic","Identify","Groups","Scenes","On/Off","Electricity Measurement","Diagnostics","FC03[Unknown/Non-Standard]"],
  "out-clusters":["OTA Update (Non HA/ZCL)"],
  "profile":"Home Automation (HA)",
  "name": "Leviton Plug One",
  "device": "Leviton Plug",
  "type": "binaryswitches"
}, {
  "network-id":"093B",
  "endpoint":"01",
  "euid64":"000D6F000B2E5846",
  "in-clusters":["Basic","Identify","Groups","Scenes","On/Off","Electricity Measurement","Diagnostics","FC03[Unknown/Non-Standard]"],
  "out-clusters":["OTA Update (Non HA/ZCL)"],
  "profile":"Home Automation (HA)",
  "name": "Yale Lock One",
  "device": "Yale Lock",
  "type": "locks"
}];

console.log("exampleObj: ", exampleObj);

function makeFirstDiv(divId, cssClass) {
  return '<div id="' + divId + '" class="dap-control-element dap-toggle-' + cssClass + '"> </div>';
}

function makeSecondDiv(id) {
  return '<div class="dap-box ' + id + '-dap-box"> </div>';
}

function makeFirstP(id, text) {
  return '<p class="dap-title ' + id + '-dap-title">' + text + '</p>';
}

function makeThirdDiv(id) {
  return '<div class="div-three ' + id + '-div-three"> </div>';
}

function makeSecondP(id, text) {
  return '<p class="dap-box-text ' + id + '-dap-box-text">' + text + '</p>';
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
    var fontAwesomeClass = "unlock";
    var secondPText = "Unlocked";
  }
  console.log("makeFirstDiv: ", makeFirstDiv(divId, cssClass));

  var firstDiv = document.createElement("div");
  document.querySelector('.obj-element-container').appendChild(firstDiv);
  firstDiv.outerHTML = makeFirstDiv(divId, cssClass);

  var secondDiv = document.createElement("div");
  document.querySelector('.dap-toggle-' + cssClass).appendChild(secondDiv);
  secondDiv.outerHTML = makeSecondDiv(divId);

  var firstP = document.createElement("p");
  document.querySelector('.dap-toggle-' + cssClass).appendChild(firstP);
  firstP.outerHTML = makeFirstP(divId, obj.name);

  var thirdDiv = document.createElement("div");
  document.querySelector('.' + divId + '-dap-box').appendChild(thirdDiv);
  thirdDiv.outerHTML = makeThirdDiv(divId);

  var secondP = document.createElement("p");
  document.querySelector('.' + divId + '-dap-box').appendChild(secondP);
  secondP.outerHTML = makeSecondP(divId, secondPText);

  var firstI = document.createElement("i");
  document.querySelector('.' + divId + '-div-three').appendChild(firstI);
  firstI.outerHTML = makeFirstI(fontAwesomeClass);

}

// elementFromObj(exampleObj, 1);

exampleObjArray.forEach(function (c,i,a) {
  elementFromObj(c,i);
});
