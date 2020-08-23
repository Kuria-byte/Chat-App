export const setupSocket = () => {
  var webSocket = require("ws");
  const socket = new webSocket("ws://localhost:3000");

  socket.onopen = () => {
    dispatchEvent({
      type: "SETUP_SOCKET",
      payload: socket,
    });
  };
};

// var ws = require('websocket.io')
//   , http = require('http').createServer().listen(3000)
//   , server = ws.attach(http)
 
// server.on('connection', function (socket) {
//   socket.on('message', function () { });
//   socket.on('close', function () { });
// });