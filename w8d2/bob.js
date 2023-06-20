const list = ["Hello", "Bye", "Wiggle", "🥔", "🎷"];

for (let i = 0; i < 20; i++) {
  const validIndex = i % list.length;

  console.log(list[validIndex]);
}

const listObj = { 1: "Hello", 2: "Bye", 3: "Wiggle", 4: "🥔", 5: "🎷" };
