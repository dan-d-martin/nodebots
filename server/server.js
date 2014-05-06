var io = require('socket.io').listen(8080);
var id = 0;

var robots = {}

io.sockets.on('connection', function(socket) {

	socket.on('join', function(name) {
		console.log(name + ' joined');
		socket.name = name;
		robots[name] = { x: 0, y: 0, name: name, battery: 1 };
	});
	socket.on('right',function() {
		if(robots[socket.name].battery > 0) {
			robots[socket.name].x++;
			robots[socket.name].battery--;
		}

	});
	socket.on('left',function() {
		if(robots[socket.name].battery > 0) {
			robots[socket.name].x--;
			robots[socket.name].battery--;
		}

	});
	socket.on('down',function() {
		if(robots[socket.name].battery > 0) {
			robots[socket.name].y++;
			robots[socket.name].battery--;
		}

	});
	socket.on('up',function() {
		if(robots[socket.name].battery > 0) {
			robots[socket.name].y--;
			robots[socket.name].battery--;
		}

	});

});

setInterval(function() {
	//for (name in robots) {
		io.sockets.emit('update', robots);
		for(name in robots) {
			robots[name].battery = 1;
		}
		io.sockets.emit('turn');
	//}
}, 1000);


