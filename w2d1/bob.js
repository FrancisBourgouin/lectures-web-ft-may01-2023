const calculateCart = require("./calculateCart");

const aCart = [
  {
    name: "🐔🐔🐔",
    quantity: 5,
    price: 9001,
  },
];

const result = calculateCart(aCart, 0.5);
console.log(result);
