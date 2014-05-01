var io = require('socket.io').listen(8080);
io.sockets.on('connection', function(socket) {
	pos = { x: 0, y: 0};
	socket.on('message', function(data) {
		console.log("message: " + data.message);
		socket.emit("message", data.message);
	});
	socket.on('right',function() {
		pos.x++;
		console.log('move right [' + pos.x + ']');
	});
	socket.on('left',function() {
		pos.x--;
		console.log('move left [' + pos.x + ']');
	});
	socket.on('down',function() {
		pos.y++;
		console.log('move down [' + pos.y + ']');
	});
	socket.on('up',function() {
		pos.y--;
		console.log('move up [' + pos.y + ']');
	});

	setInterval(function() {
		io.sockets.emit('update', pos);
		io.sockets.emit('turn');
	}, 1000);
});	


