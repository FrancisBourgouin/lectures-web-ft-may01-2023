const listOfNumbers = [42, 9001, 1337, 999];

const showANumber = function (index) {
  console.log(listOfNumbers[index]);
  return "AHHH YEAH";
};

const result = showANumber(2);
// Call showANumber with the parameter set to 2, and store the result in the variable called result
const hmmm = showANumber;
//

// console.log("Content of result", result);
console.log(hmmm);

const pollo = { name: "Pequeno Pollo", sound: "Pock pock" };
const anotherChicken = pollo;
