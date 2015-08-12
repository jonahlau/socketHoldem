var express = require('express'),
    morgan = require('morgan'),
    config = require('./config');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

server.listen(config.PORT, function() {
  console.log('Express server listening on port ' + config.PORT);
});

io.on('connection', function(socket) {
  socket.on('addUser', function(username) {
    socket.username = username;
    socket.room = 'Lobby'
  });
});