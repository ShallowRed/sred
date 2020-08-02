const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const Routes = require("./routes");

const app = express();
const server = http.Server(app);
const io = socketIo(server);

const port = 3000;

app.use('/', Routes);

app.set('port', port);

server.listen(port, () =>
  console.log('Starting server on port ' + port)
);
