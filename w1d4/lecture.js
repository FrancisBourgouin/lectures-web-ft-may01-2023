// Why we use functions
// DRY - To make the code reusable
// Avoid repetition
// Readable

// sayHi();
// function sayHi() {
//   // Function definition, hoisting, can be overwritten
//   console.log("Good morning");
// }
// function sayHi() {
//   console.log("Good afternoon");
// }

const sayHi = function () {
  // Function expression
  console.log("Good morning");
};
sayHi();

const sayHiToSomeone = function (name) {
  console.log(`Good morning ${name}`);
};

sayHiToSomeone("Jamil");
sayHiToSomeone("Tagel");

const saySomethingToSomeone = function (whatToSay, toWhom) {
  console.log(`${whatToSay} ${toWhom}`);
};

saySomethingToSomeone("Bon matin", "Asha");

const listOfNames = ["Arian", "Tamara", "Joyce", "Wei", "Cynthia"];

const saySomethingToALotOfPeople = function (nameList, whatToSay) {
  // nameList will be an array
  // whatToSay will be a string

  for (const name of nameList) {
    saySomethingToSomeone(whatToSay, name);
  }
};

// saySomethingToALotOfPeople(listOfNames, "Bon matin");

const sayGoodMorning = function (name) {
  saySomethingToSomeone("Good morning", name);
};

// sayGoodMorning("Kaitlin");

// Is a function an object?

const doSomethingToAbdul = function (doSomething) {
  // "Abdul"
  doSomething("Abdul");
};

// Function call: sayGoodMorning, the result
// Function reference: sayGoodMorning the variable

doSomethingToAbdul(sayGoodMorning);
