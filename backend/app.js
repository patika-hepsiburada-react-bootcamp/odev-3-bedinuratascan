const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.end('voting app');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('voted-language', (language) => {
    console.log('voted language:', language);
    socket.broadcast.emit('voted-language', language);
  });

  socket.on('disconnect', () => console.log('a user disconnected'));
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});