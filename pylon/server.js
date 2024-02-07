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
