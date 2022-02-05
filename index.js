const WebSocket = require("ws");

const wsServer = new WebSocket.Server({ port: 8080 });

wsServer.on('connection', connection => {
  console.log('somebody connected')
  connection.send('Hi there!')
  connection.on('message', message => {
    wsServer.clients.forEach(function each (client){
      client.send(message)
    })

  })
})
