var io = require('socket.io').listen(8080);
var id = 0;

var robots = {}

io.sockets.on('connection', function(socket) {

	socket.on('join', function(name) {
		console.log(name + ' joined');
		socket.name = name;
		robots[name] = { x: 0, y: 0, name: name };
	});
	socket.on('right',function() {
		robots[socket.name].x++;

	});
	socket.on('left',function() {
		robots[socket.name].x--;

	});
	socket.on('down',function() {
		robots[socket.name].y++;

	});
	socket.on('up',function() {
		robots[socket.name].y--;

	});

});

setInterval(function() {
	for (name in robots) {
		io.sockets.emit('update', robots[name]);
		io.sockets.emit('turn');
	}
}, 1000);


