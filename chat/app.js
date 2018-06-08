var express = require('express');
var app = express()
//var http = require('http').Server(app)


//envoi index.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

// defini le port ecouté
var server = app.listen(3000, function () {
    console.log('ca marche');
});

// on require socket.io
// a mettre apres le listen
var io = require('socket.io')(server)

// averti la connection
io.on('connection', function(socket){
    console.log('a user connected');
    console.log();
    
})

// recupere les messages en console
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
    });
  });


  // send event to everyone
io.emit('some event', {for: 'everyone'});

//   If you want to send a message to everyone except for a certain socket
io.on('connection', function(socket){
 socket.broadcast.emit('hi');
});

// envoi le message a tout le monde
io.on('connection', function(socket){
socket.on('chat message', function(msg){
    io.emit('chat message', msg);


//CHANGER LE USERNAME
    //ecoute toutes les connections
    io.on('connection', function(socket){

        //on log le nouvel arrivant
        console.log('new user here');

        //on attribut anonyme a son nom
        socket.username = "Anonymous"

        //permet de change le nom
        socket.on('change_username', function(data){
            socket.username = data.username
        })
        
    });
});
});

