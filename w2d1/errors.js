const bob = 5;
// bob = 56;

// LINE 2: Throws an error / uncaught exception / unhandled exception

// Throw => Catch

const willItThrow = () => {
  const yes = Math.random() > 0.5;
  if (yes) {
    throw new Error("OH NO");
  } else {
    console.log("Yay!");
  }
};

try {
  // bob = 56;
  // throw new Error("I AM AN ERROR MWAHAHAHAHAHA");
  const result = willItThrow();
  result;
} catch (error) {
  console.log(error.message);
}

console.log(bob);
