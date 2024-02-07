// const webSocketServer = require('websocket').server;
// const http = require('http');

// const server = http.createServer();
// server.listen(55455);
// const wsServer = new webSocketServer({ httpServer: server });




// 

import WebSocket from "websocket";
import Http from "https";

const port = 5555;

const WebSocketServer = WebSocket.server;

var ServiceServer = Http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

ServiceServer.listen(port, function() {
    console.log(new Date());
    console.log(`Server is Running at ws://localhost:${port}`);
});

const wsServer = new WebSocketServer({ httpServer: ServiceServer, autoAcceptConnections: true });

wsServer.on('request', function (request) {
  console.log('establishing a new connection with client');
  var connection = request.accept(null, request.origin);
  setInterval(() => {
      connection.sendUTF(new Date().getTime())
  }, 100);
});

// wsServer.on('request', function(request) {    
//     var connection = request.accept(null, request.origin);

//     console.log((new Date()) + ' Connection accepted.');

//     connection.on('message', function(message) {
//         if (message.type === 'utf8') {
//             console.log('Received Message: ' + message.utf8Data);
//             setInterval(()=>{
//               connection.sendUTF(new Date().getTime());
//             }, 500);
//         }
//         else if (message.type === 'binary') {
//             console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
//             connection.sendBytes(message.binaryData);
//         }
//     });
//     connection.on('close', function(reasonCode, description) {
//         console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
//     });
// });