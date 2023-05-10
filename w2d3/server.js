// Chat Server & Client

const net = require("net");
// const net = require("node:net") node: is the namespace of the net package

const allTheConnections = [];

const instructionsForConnection = (connection) => {
  const parrotBack = (message) => {
    if (message) {
      connection.write(`🦜: ${message}`);
    }
  };
  const broadcast = (message) => {
    // Iterate over the list of all the connections
    for (const connectionInTheList of allTheConnections) {
      // If the connection object is NOT IDENTICAL to connectionInTheList
      if (connection !== connectionInTheList) {
        connectionInTheList.write(`📣: ${message}`);
      }
    }
  };

  allTheConnections.push(connection);

  connection.setEncoding("utf-8");
  // Server notices that there is a new connection
  console.log("Hey new person!");

  // Say to the connection hi
  connection.write("Hello there. \n");

  // Listen to what the connection has to say!
  // .on (.onTheEventOfRecevingDataEvent)
  connection.on("data", (data) => console.log(data));

  // Parrot back the info to the client
  // connection.on("data", parrotBack);

  // Broadcast to everyone!
  connection.on("data", broadcast);
};

const server = net.createServer(instructionsForConnection);

server.on("listening", () => console.log("Server is ready!"));

server.listen(1337);

// Event Listeners
// setTimeout(() => {
// // When?
// },1000)
