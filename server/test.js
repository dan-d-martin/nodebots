	var io = require('socket.io-client');
	var socket = io.connect('localhost', { port: 8080 });
	i = 0;
	dir = 0;
	socket.on('turn', function() {
		if(i++%5) {
			dir++;
			if(dir > 3)
				dir = 0;
		}
		if(dir == 0)
			socket.emit('right');
		else if (dir == 1)
			socket.emit('down');
		else if (dir == 2)
			socket.emit('left');
		else if (dir == 3)
			socket.emit('up');	
	});
