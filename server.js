const express = require('express');
const port = process.env.PORT || 8080;

const app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function (req, res) {
   res.sendFile(__dirname +'/dist/index.html');
});

io.on('connection', function(socket) {
    io.set('transports', ['websocket']);
    console.log('new connection on socket.io');
    socket.on('move', function(msg) {
        socket.broadcast.emit('move', msg);
    });
});
app.listen(port);
console.log('serving');

export default io