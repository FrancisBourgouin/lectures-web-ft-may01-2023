const net = require("net");
const readline = require("readline");
// l33tSp34k
const client = net.createConnection({ host: "localhost", port: 1337 });

// Set the encoding!
client.setEncoding("utf-8");

// client.on("data", (data) => console.log(data))
client.on("data", console.log);

// setInterval(() => {
//   client.write("AHHHH YEAAHHH");
// }, 1000);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("What do you want to say?", (answer) => {
//   client.write(answer);
// });

rl.on("line", (input) => {
  client.write(input);
});
