const { IP, PORT } = require("./constants");
const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write('Name: DN');
  });

  //conn.on("connect", () => {
  //setInterval(() => {conn.write("Move: up")}, 50)
  //});
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };