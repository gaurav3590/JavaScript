//chat.js
var net = require('net');
var sockets = [];
var server = net.createServer(
    function (socket) {
        console.log("new socket received:" + sockets.length);
        sockets.push(socket);
        socket.on('data', function (d) {
            console.log("data from one of the socket .")
            for (var i = 0; i < sockets.length; i++) {
                if (socket != sockets[i]) {
                    sockets[i].write(d);
                }
            }
        });

        socket.on('end', function () {
            var i = sockets.indexOf(socket);
            sockets.splice(i, 1);
        });

    });

server.listen(3005);