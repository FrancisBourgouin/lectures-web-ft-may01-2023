const listOfNames = ["Arian", "Tamara", "Joyce", "Wei", "Cynthia"];

const sayGoodMorning = function (name) {
  console.log(`Good Morning ${name}`);
};

const sayBye = function (name) {
  console.log(`Bye ${name}`);
};

const sayByeWithArrow = (name) => console.log(`Bye ${name}`);

const sayByeWithArrow2 = (name) => {
  console.log(`Bye ${name}`);
};

// const saySomethingToEveryone = function (listOfNames, isGoodMorning) {
//   for (const name of listOfNames) {
//     if (isGoodMorning) {
//       sayGoodMorning(name);
//     } else {
//       sayBye(name);
//     }
//   }
// };

// saySomethingToEveryone(listOfNames, false);

const addTwoNumbersTogether = function (num1, num2) {
  console.log(num1 + num2);
};

const saySomethingToEveryone = function (listOfNames, sayAction) {
  // listOfNames to be an array of names
  // sayAction to be function definition (or a reference to a function definition)

  for (const name of listOfNames) {
    sayAction(name);
  }
};

saySomethingToEveryone(listOfNames, sayGoodMorning);
// sayGoodMorning is THE callback of saySomethingToEveryone

saySomethingToEveryone(listOfNames, sayBye);
// sayBye is THE callback of saySomethingToEveryone

saySomethingToEveryone(listOfNames, function (name) {
  console.log(`Bye ${name}`);
});

saySomethingToEveryone(listOfNames, (name) => console.log(`Bye ${name}`));

// saySomethingToEveryone(listOfNames, undefined);

// saySomethingToEveryone => Higher Order Function
// HOFs => President
// Callback action => What is sayAction? I dunno, I'll call you back witht he answer
// Callback is a relationship status

const listOfNumbers = [42, 9001, 1337, 999];

const homemadeForEach = (list, action) => {
  for (const item of list) {
    action(item);
  }
};

homemadeForEach(listOfNumbers, (number) => console.log(2 * number));

let sum = 0;
homemadeForEach(listOfNumbers, (number) => (sum += number));
console.log("Sum is:", sum);

const newArray = [];
homemadeForEach(listOfNumbers, (number) => newArray.push(number * 2));
console.log("New array is:", newArray);

const homemadeMap = (list, action) => {
  const newArray = [];
  for (const item of list) {
    const result = action(item);
    newArray.push(result);
  }
  return newArray;
};

const betterNewArray = homemadeMap(listOfNumbers, (number) => number * 2);
console.log("Better new array is:", betterNewArray);

const anotherNewArray = listOfNumbers.map((number) => number * 3);

listOfNames.forEach(sayGoodMorning);

// Math bad
// French bad
// English good
// Chemistry good

const isChillParentsHappy = (grade) => {
  if (grade.score >= 60) {
    return true;
  } else {
    return false;
  }
};
const isSomeParentsHappy = (grade, isSunny) => {
  if (grade.score >= 60) {
    return true;
  } else {
    return false;
  }
};

const isAngryParentsHappy = (grade) => {
  if (grade.subject !== "french" && grade.score > 80) {
    return true;
  } else if (grade.subject === "french") {
    return true;
  } else {
    return false;
  }
};

const isCrazyParentsHappy = () => {
  const randomValue = Math.random();

  if (randomValue > 0.5) {
    return true;
  } else {
    return false;
  }
};

const generateMessagePostGrade = (grade, parentCondition) => {
  const isParentHappy = parentCondition(grade);

  if (isParentHappy) {
    console.log("GOOD JOB.");
  } else {
    console.log("I AM DISAPPOINT");
  }
};

[1, 23].forEach();

const someGrade = { subject: "math", score: 60 };

const someParentsHappyWhenSunny = (grade) => isSomeParentsHappy(grade, true);

generateMessagePostGrade(someGrade, isChillParentsHappy);
generateMessagePostGrade(someGrade, isAngryParentsHappy);
generateMessagePostGrade(someGrade, isCrazyParentsHappy);

generateMessagePostGrade(someGrade, someParentsHappyWhenSunny);
generateMessagePostGrade(someGrade, (grade) => isSomeParentsHappy(grade, true));

// IIFE => Iffy
// Immediately Invokable Function Expression

// const consoleHello = () =>
//   console.log("hello")(() => console.log("hello"))()(() => {
//     console.log("hello!");
//   })();

// A higher order function needs an extra step to work properly (callback function, or something else)
// Callbacks are a relationship status between a function and a higher order function
// When we define the higher order function, we need to give the parameters that the callback may use or not
// action(value, index, array)
// Callback doesn't need to use all the provided arguments

// To know the provided callback parameter that we can use, we either look at the definition, or the documentation
