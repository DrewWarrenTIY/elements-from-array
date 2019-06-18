"use strict";

var exampleArr = [];
var objArr = [];

document.querySelector(".js-to-be-added")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.querySelector(".js-add-to-array").click();
    }
});

function addToArray() {
  var toButton = document.querySelector('.js-to-be-added');
  if (toButton.value === '') {
    console.log("Whoops! That's an empty string!")
    return false;
  }
  console.log("input value: ", toButton.value);
  exampleArr.push(toButton.value);
  console.log("exampleArr value: ", exampleArr);
  document.querySelector('.js-array-span').innerHTML = exampleArr;
  toButton.value = '';
}

function logIt(obj) {
  console.log('Button says: ', obj.textContent);
}

function makeButton(text) {
  return '<button class="js-element-template js-btn" type="button" onClick="logIt(this)">' + text + '</button>'
}

function makeElements() {
  document.querySelector('.js-element-container').innerHTML = '';
  console.log(exampleArr);
  exampleArr.forEach(function (c,i,a) {
    console.log(makeButton(c));
    var newButton = document.createElement("button");
    document.querySelector('.js-element-container').appendChild(newButton);
    newButton.outerHTML = makeButton(c);
  });
}

function addToObjectArr() {
  var objToAdd = {};
  var name = document.querySelector('.js-to-be-obj-name');
  var age = document.querySelector('.js-to-be-obj-age');
  var gender = document.querySelector('.js-to-be-obj-gender');

  objToAdd.name = name.value;
  objToAdd.age = age.value;
  objToAdd.gender = gender.value.toLowerCase();

  console.log('objToAdd: ', objToAdd);

  objArr.push(objToAdd);
  name.value = '';
  age.value = '';
}

var maleCount = 0;
var femaleCount = 0;
var otherCount = 0;

function incrementGender(obj) {
  if(obj.gender === "male") {
    maleCount ++;
  }
  if(obj.gender === "female") {
    femaleCount ++;
  }
  if(obj.gender === "other") {
    otherCount ++;
  }
}

function resetGenderCount() {
  maleCount = 0;
  femaleCount = 0;
  otherCount = 0;
}

function makeFirstDiv(divId, gender) {
  return '<div id="' + divId + '" class="first-div ' + gender + '"> </div>';
}

function makeSecondDiv() {
  return '<div class="second-div"> </div>';
}

function makeFirstP(name) {
  return '<p class="name">' + name + '</p>';
}

function makeSecondP(age) {
  return '<p class="age">' + age + '</p>';
}

function makeElementFromObj(obj, number) {
  if(obj.gender === "male") {
    var divId = "male" + number;
  }
  if(obj.gender === "female") {
    var divId = "female" + number;
  }
  if(obj.gender === "other") {
    var divId = "other" + number;
  }

  var firstDiv = document.createElement("div");
  document.querySelector('.obj-element-container').appendChild(firstDiv);
  firstDiv.outerHTML = makeFirstDiv(divId, obj.gender);

  var secondDiv = document.createElement("div");
  document.getElementById(divId).appendChild(secondDiv);
  secondDiv.outerHTML = makeSecondDiv();

  var firstP = document.createElement("div");
  document.getElementById(divId).appendChild(secondDiv);
  secondDiv.outerHTML = makeFirstP(obj.name);

  var secondP = document.createElement("div");
  document.getElementById(divId).appendChild(secondDiv);
  secondDiv.outerHTML = makeSecondP(obj.age);

}

function makeElementsFromObj() {
  objArr.forEach(function (c,i,a) {
    incrementGender(c);
    if (c.gender === "male") {
      makeElementFromObj(c, maleCount);
    }
    if (c.gender === "female") {
      makeElementFromObj(c, femaleCount);
    }
    if (c.gender === "other") {
      makeElementFromObj(c, otherCount);
    }


    console.log('makeFirstDiv: ', makeFirstDiv(c.gender));
    console.log('i: ', i);


  });
}
