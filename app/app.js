/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/:room', routes.room);


server.listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});


io.sockets.on('connection', function(socket) {
  socket.on('init', function(roomId) {
    socket.set('roomId', roomId, function() {
      socket.join(roomId);
    });
  });


  socket.on('getSeat', function(data) {
    socket.get('roomId', function(err, roomId) {
      socket.get('side', function(err, oldSide) {
        if (oldSide) {
          io.sockets.in(roomId).emit('sideFree', oldSide);
        }
        socket.set('side', data, function() {
          socket.broadcast.to(roomId).emit('sideTaken', data);
          socket.emit('gotSide', data);
        });
      });
    });
  });
});
